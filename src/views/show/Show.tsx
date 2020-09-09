import * as React from 'react';

export interface ShowProps {
  
}
 
export interface ShowState {
  
}
 
class Show extends React.Component<ShowProps, ShowState> {
  constructor(props: ShowProps) {
    super(props);
    this.state = {

    };
  }
  render() { 
    return ( 
      <div>
        Show
      </div>
     );
  }
}
 
export default Show;