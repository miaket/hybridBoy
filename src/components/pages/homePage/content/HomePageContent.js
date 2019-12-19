import React from 'react';

// Since this component is simple and static, there's no parent container for it.
const ExamplePage = ({funds}) => {
  console.log('cont',funds)
  return (
    <div className="homePageWrapper">
      <h1 className="alt-header">Favorite dishes</h1>
      <p>
        Your favorite dishes!
      </p>
        {funds && 
         <p>
           {funds}
         </p>
        }
    </div>
  );
};

export default ExamplePage;
