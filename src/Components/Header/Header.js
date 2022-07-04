import React from "react";
import { Menu, MenuButton, MenuList, IconButton, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Menu>
                <MenuButton as={IconButton} aria-label="Options" variant="outline" />
                <MenuList>
                    <Link to="/">
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to="/posts">
                        <MenuItem>Posts</MenuItem>
                    </Link>

                    <MenuItem command="/">New Window</MenuItem>
                    <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
                    <MenuItem command="⌘O">Open File...</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
};

export default Header;
