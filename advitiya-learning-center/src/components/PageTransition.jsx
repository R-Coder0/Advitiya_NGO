import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={500}  // Adjust the timeout to match your CSS animation duration
      >
        <div>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
