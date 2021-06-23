import RocketIMG from "../images/rocket.svg";

export const Rocket = () => (
  <object
    style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    }}
    height="70%"
    width="70%"
    type="image/svg+xml"
    data={RocketIMG}
    aria-label="Loading app..."
  />
);
