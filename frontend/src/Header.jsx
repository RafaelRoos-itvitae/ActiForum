import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Badge, Button, Icon, IconButton } from 'actify';

function Header() {
    const color = 'error'
    const [value, setValue] = useState("\u00A0")

    return (
        <div className="sticky top-0 left-0 w-full bg-surface-container">
            <div className="header p-8 flex justify-between items-center font-bold">
                <IconButton className="scale-150">
                    <Icon className='text-on-secondary-container'>home</Icon>
                </IconButton>
                <Button variant="tonal" className="scale-150">
                    <span className="font-bold">New Thread</span>
                    <Icon>add</Icon>
                </Button>
                <div className="login scale-150 flex items-center">
                    <Badge value={value} color={color}>
                        <IconButton>
                            <Icon className='text-on-secondary-container'>notifications</Icon>
                        </IconButton>
                    </Badge>
                    <IconButton variant="filled-tonal">
                        <Icon className='text-on-secondary-container'>person</Icon>
                        {/* <Avatar src={reactLogo}></Avatar> */}
                    </IconButton>
                </div>
            </div>
        </div>
  );
};
export default Header