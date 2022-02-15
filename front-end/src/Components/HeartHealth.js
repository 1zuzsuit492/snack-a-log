import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ is_healthy }) {
  if (is_healthy) {
    return <img className="heartSolid" src={heartSolid} alt={"healthy food"} />;
  }
  return (
    <img className="heartOutline" src={heartOutline} alt={"unhealthy food"} />
  );
}

export default HeartHealth;

//snackHealth is a Boolean value (true or false) that is being passed down as a prop from a parent component
