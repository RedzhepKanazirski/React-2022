const styles = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: 'lightblue'
};


export function Footer(){
    return(
      <footer className="footer" style={styles}>
       Kanazirski Rental service. All rights reserved!
      </footer>
    );
}