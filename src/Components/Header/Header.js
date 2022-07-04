import React from "react";
import { Menu, MenuButton, MenuList, IconButton, MenuItem, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
    return (
        <Container maxW={"1300px"} mt="4" pb={"4"}>
            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} aria-label="Options" variant="outline" />
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
        </Container>
    );
};

export default Header;
