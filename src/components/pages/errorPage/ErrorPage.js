import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../constants/ROUTES';

// Since this component is simple and static, there's no parent container for it.
const ExamplePage = () => {
  return (
    <div className="ErrorPageWrapper">
      <h1 className="alt-header">Error</h1>
      <p>
        Something went wrong!
      </p>
      <p>
        Click on this link to <Link to={ROUTES.LOGIN}>redirect to the login page</Link>
      </p>
    </div>
  );
};

export default ExamplePage;
