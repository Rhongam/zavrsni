import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';
import './breadcrumbs.scss'

function BasicBreadcrumbs() {

  const location = useLocation();
  const history = useNavigate();
  const pathnames = location.pathname.split("/").filter(el => el)

  return (
    <div className='breadcrumbs' role="presentation">
      <Breadcrumbs className='breadcrumbs-display' aria-label="breadcrumb" separator='>' >
        {location.pathname === '/' ? <Link underline="hover" color="inherit" onClick={() => history('/')} sx={{ cursor: 'pointer' }} >
          Home
        </Link> : null
        }
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <Link underline="hover" color="inherit" className='breadcrumb-element' onClick={() => history(routeTo)} sx={{ cursor: 'pointer' }}>{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
          )
        })}
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbs;