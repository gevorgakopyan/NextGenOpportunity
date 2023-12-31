import { Box } from '@mui/material';
import React, { Fragment } from 'react';
import { Link } from '@mui/material';
import styled from '@emotion/styled';

function Navbar() {
  const navItems =
    window.innerWidth > 425 //Home, About, Data, Narrative, Bibliography, Meet the Team
      ? [
          { to: '/', name: 'HOME' },
          { to: '/about', name: 'ABOUT' },
          { to: '/data', name: 'DATA'},
          { to: '/narrative', name: 'NARRATIVE' },
          { to: '/bibliography', name: 'BIBLIOGRAPHY' },
          { to: '/team', name: 'MEET THE TEAM' }
        ]
      : [
          { to: '/', name: 'HOME' },
          { to: '/about', name: 'ABOUT' },
          { to: '/data', name: 'DATA'},
        ];

  const NavLink = styled(Link)(({ theme }) => ({
    fontSize: '0.8rem',
    color: 'black',
    textDecoration: 'none',
    zIndex: 2,
  }));

  const currPage =
    '/' +
    window.location.href.split('/')[window.location.href.split('/').length - 1];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        height: '5rem',
      }}
      alignItems={'center'}
    >
      <NavLink href={navItems[0].to}>{navItems[0].name}</NavLink>
      {navItems.slice(1).map((navItem) => {
        return (
          <Fragment key={navItem.to}>
            <hr
              style={{
                width: window.innerWidth > 425 ? '3rem' : '1.5rem',
                border: 'none',
                borderTop: '1px solid #a0a0a0',
                margin: '8px 0',
              }}
            />
            <NavLink
              sx={navItem.to === currPage ? { color: '#046c75 !important' } : {}}
              href={navItem.to}
            >
              {navItem.name}
            </NavLink>
          </Fragment>
        );
      })}
    </Box>
  );
}

export default Navbar;
