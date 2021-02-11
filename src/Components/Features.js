import styled from "styled-components";
import {
  FaBell,
  FaTag,
  FaCheck,
  FaCog,
  FaStickyNote,
  FaCalendarAlt,
} from "react-icons/fa";

const Feature = styled.nav`
  font-size: 2em;
  background-color: #fff;
`;
const Logo = styled.div`
  color: #7367f0;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MenuItem = styled.p`
  font-size: 16px;
  padding: 10px;
  margin: 5px 16px;
  color: gray;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #7367f0;
    color: white;
    transition: ease-in-out 0.1s;
  }
`;

export default function Features() {
  return (
    <Feature>
      <Logo>
        <FaStickyNote />
        <h4>Task.ly</h4>
      </Logo>
      <Menu>
        <MenuItem>
          <FaBell /> Notifications
        </MenuItem>
        <MenuItem>
          <FaCheck /> Completed
        </MenuItem>
        <MenuItem>
          <FaCalendarAlt /> Calendar
        </MenuItem>
        <MenuItem>
          <FaTag /> Tags
        </MenuItem>
        <MenuItem>
          <FaCog /> Settings
        </MenuItem>
      </Menu>
    </Feature>
  );
}
