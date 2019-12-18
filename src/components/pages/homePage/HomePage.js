import React from 'react';

// Since this component is simple and static, there's no parent container for it.
const ExamplePage = () => {
  return (
    <div className="homePageWrapper">
      <h1 className="alt-header">Favorite dishes</h1>
      <p>
        Your favorite dishes!
      </p>
    </div>
  );
};

export default ExamplePage;
