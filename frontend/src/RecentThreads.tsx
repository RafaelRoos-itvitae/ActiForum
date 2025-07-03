import { Avatar, Cell, Column, IconButton, Ripple, Row, Table, TableBody, TableHeader, useAsyncList } from 'actify';
import { useState, useEffect, useId } from 'react';
import { Link } from 'react-router';
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
    userImageURL: string | null;
}

function ImageAndUser({ user }: { user: User }) {
    return (
        <div className="flex flex-col">
        <IconButton>
            <img src={user.userImageURL} alt={user.userName} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
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

    const id = useId();

    useEffect(() => {
        while (true) {};
    })

    return (
    <>
    <div className="text-2xl text-center">Recent Threads</div>
        <Table style={{ height: '20px', maxWidth: '80px' }} paginator={{ pageSizes: [5, 10, 20] }} aria-label="Table of threads">
            <TableHeader>
                <Column key="threadUser"></Column>
                <Column key="threadName"></Column>
                <Column key="threadContent"></Column>
                <Column key="threadCreationTime"></Column>
            </TableHeader>
            {/* <Ripple id={id} /> */}
            <TableBody items={data.items}>
                {(item) => (
                    <Row key={item.id}>
                        <Cell>
                            <ImageAndUser user={item.threadUser} />
                        </Cell>
                        <Cell><Ripple />{item.threadName}</Cell>
                        <Cell><Ripple />{item.threadContent}</Cell>
                        <Cell><Ripple />{format(parseISO(item.threadCreationTime), 'MMMM dd, yyyy')}</Cell>
                    </Row>
                )}
            </TableBody>
        </Table>
    </>
    );
}
export default RecentThreads;