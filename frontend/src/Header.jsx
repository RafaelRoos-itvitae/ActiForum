import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Badge, Button, Icon, IconButton } from 'actify';
import { Link } from 'react-router';

function Header() {
    const color = 'error'
    const [value, setValue] = useState("\u00A0")

    return (
        <div className="sticky top-0 left-0 w-full bg-surface-container">
            <div className="header p-8 flex justify-between items-center font-bold">
                <Link to={"/"}>
                    <IconButton className="scale-150">
                        <Icon className='text-on-secondary-container'>home</Icon>
                    </IconButton>
                </Link>
                <Link to={"/thread/create"}>
                    <Button variant="tonal" className="scale-150">
                        <span className="font-bold">New Thread</span>
                        <Icon>add</Icon>
                    </Button>
                </Link>
                <div className="login scale-150 flex items-center">
                    <Badge value={value} color={color}>
                        <IconButton>
                            <Icon className='text-on-secondary-container'>notifications</Icon>
                        </IconButton>
                    </Badge>
                    <Link to={"/user/${currentuser}"}>
                        <IconButton variant="filled-tonal">
                            <Icon className='text-on-secondary-container'>person</Icon>
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>
  );
};
export default Header