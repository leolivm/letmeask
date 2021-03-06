import React from "react";
import copyImg from "../assets/images/copy.svg";
import "../styles/roomcode.scss";

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = (props) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code);
  };

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala {props.code}</span>
    </button>
  );
};

export default RoomCode;
