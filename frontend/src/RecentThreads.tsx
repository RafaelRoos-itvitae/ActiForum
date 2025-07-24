import { Avatar, Cell, Column, IconButton, Ripple, Row, Table, TableBody, TableHeader, useAsyncList, VisuallyHidden } from 'actify';
import { useState, useEffect, useId } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import { format, parseISO } from 'date-fns';

interface Thread {
    id: number;
    threadName: string;
    threadContent: string | null;
    threadUser: User;
    threadCreationTime: string;
    threadUpdateTime: string | null;
}

interface User {
    id: number;
    userName: string;
    userImageURL: string | null | undefined;
}

function ImageAndUser({ user }: { user: User }) {
    return (
        <div className="flex flex-col">
            <IconButton>
                <img src={user.userImageURL || undefined} alt={user.userName} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            </IconButton>
            <span>{user.userName}</span>
        </div>
    );
}

function RecentThreads() {

    const data = useAsyncList<Thread>({
        async load({ signal }) {
            let res = await fetch("http://localhost:8080/api/thread", { signal });
            let json = await res.json();
            return { items: json };
        }
    });


    let navigate = useNavigate();
    const id = useId();

    return (
    <>
        <div className="text-2xl text-center">Recent Threads</div>
        <Table onRowAction={key => navigate(`/thread/${key}`)}
            style={{ height: '20px', maxWidth: '80px' }}
            paginator={{ pageSizes: [10, 20, 50, 100, 200] }}
            aria-label="Table of threads">
            <TableHeader>
                <Column key="threadUser"> </Column>
                <Column key="threadName"> </Column>
                <Column key="threadContent"> </Column>
                <Column key="threadCreationTime"> </Column>
            </TableHeader>
            <TableBody items={data.items}>
                {(item) => (
                    <Row key={item.id}>
                        <Cell>
                            <ImageAndUser user={item.threadUser} />
                        </Cell>
                        <Cell>
                                <Ripple />{item.threadName}
                        </Cell>
                        <Cell>{item.threadContent}</Cell>
                        <Cell>{format(parseISO(item.threadCreationTime), 'MMMM dd, yyyy')}</Cell>
                    </Row>
                )}
            </TableBody>
        </Table>
    </>
    );
}
export default RecentThreads;