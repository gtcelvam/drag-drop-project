import React, { useRef } from "react";
import Icon from "../src/components/Icon";
import {
  handleLeftIncrease,
  handleLeftDecrease,
  handleRotateLeft,
  handleRotateRight,
  handleGotoXandY,
  handleRandomWithGlide,
  resetTransition,
  handleSetXValue,
  handleSetYValue,
  handleTopIncrease,
  handleSayHello,
  handleSayHmm,
  handleVisibility,
} from "../store/styleSlice";
import { useDispatch } from "react-redux";
import { generateRandomNumber } from "./helpers";

//widget names
export const widgetNames = {
  move10Steps: "move10Steps",
  turn15DegreeComponentUndo: "Turn15DegreeComponentUndo",
  turn15DegreeComponentRedo: "Turn15DegreeComponentRedo",
  gotoXandYComponent: "GotoXandYComponent",
  gotoRandomPosition: "GotoRandomPosition",
  glideToRandomPosition: "glideToRandomPosition",
  setXPosition: "setXPosition",
  setYPosition: "setYPosition",
  changeYByValue: "changeYByValue",
  sayHello: "sayHello",
  sayHelloForSeconds: "SayHelloForSeconds",
  sayHmm: "sayHmm",
  sayHmmForSeconds: "sayHmmForSeconds",
  show:"show",
  hide:"hide"
};

//widget component
export const Move10StepsComponent = ({ type = widgetNames.move10Steps }) => {
  //hooks
  const dispatch = useDispatch();
  const inputRef = useRef();

  //functions
  const handleDisptach = () => {
    const payload = parseInt(inputRef.current.value);
    let handlePayload = handleLeftIncrease(payload);
    switch (type) {
      case widgetNames.setXPosition:
        handlePayload = handleSetXValue(payload);
        break;
      case widgetNames.setYPosition:
        handlePayload = handleSetYValue(payload);
        break;
      case widgetNames.changeYByValue:
        handlePayload = handleTopIncrease(payload);
        break;
      default:
        handlePayload = handleLeftIncrease(payload);
        break;
    }
    dispatch(handlePayload);
  };

  let frontText = "Move";
  let backText = "Steps";

  switch (type) {
    case widgetNames.setXPosition:
      frontText = "set x to";
      backText = "";
      break;
    case widgetNames.setYPosition:
      frontText = "set y to";
      backText = "";
      break;
    case widgetNames.move10Steps:
      frontText = "Move";
      backText = "Steps";
      break;
    case widgetNames.changeYByValue:
      frontText = "Change y by ";
      backText = "";
      break;
    default:
      frontText = "Move";
      backText = "Steps";
      break;
  }

  return (
    <div
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={handleDisptach}
    >
      {frontText}
      <input
        ref={inputRef}
        type="text"
        style={{
          width: "25px",
          color: "black",
          paddingLeft: "4px",
          margin: "0 4px",
          borderRadius: "40%",
        }}
        onClick={(e) => e.stopPropagation()}
        defaultValue={10}
        onChange={() => void 0}
      />
      {backText}
    </div>
  );
};

export const Turn15DegreeComponentUndo = ({
  type = widgetNames.turn15DegreeComponentUndo,
}) => {
  //hooks
  const dispatch = useDispatch();
  const inputRef = useRef();

  //constants
  const iconType =
    type == widgetNames.turn15DegreeComponentRedo ? "redo" : "undo";

  //functions
  const handleDisptach = () => {
    const payload = parseInt(inputRef.current.value);
    const handleRotate =
      type === widgetNames.turn15DegreeComponentRedo
        ? handleRotateRight(payload)
        : handleRotateLeft(payload);
    dispatch(handleRotate);
  };

  return (
    <div
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={handleDisptach}
    >
      {"Turn "}
      <Icon name={iconType} size={15} className="text-white mx-2" />
      <input
        ref={inputRef}
        type="text"
        style={{
          width: "25px",
          color: "black",
          paddingLeft: "4px",
          margin: "0 4px",
          borderRadius: "40%",
        }}
        onClick={(e) => e.stopPropagation()}
        defaultValue={15}
        onChange={() => void 0}
      />
      {"degrees"}
    </div>
  );
};

export const GotoXandYComponent = ({ type = "X and Y" }) => {
  //hooks
  const dispatch = useDispatch();
  const xAxisRef = useRef();
  const yAxisRef = useRef();

  //functions
  const handleDisptach = (e) => {
    let payload = {};
    if (type === widgetNames.gotoRandomPosition) {
      payload.x = generateRandomNumber();
      payload.y = generateRandomNumber();
      dispatch(handleGotoXandY(payload));
      return;
    }

    if (type === widgetNames.glideToRandomPosition) {
      payload.x = generateRandomNumber();
      payload.y = generateRandomNumber();
      payload.glide = xAxisRef.current.value;
      dispatch(handleRandomWithGlide(payload));
      payload = {};
      setTimeout(() => {
        dispatch(resetTransition());
      }, 0);
      return;
    }

    payload = {
      x: parseInt(xAxisRef.current.value),
      y: parseInt(yAxisRef.current.value),
    };
    console.log("payload : ", payload);
    if (Boolean(payload.x) || Boolean(payload.y)) {
      dispatch(handleGotoXandY(payload));
    }
  };

  if (type === widgetNames.gotoRandomPosition) {
    return (
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={handleDisptach}
      >
        {"go to random position"}
      </div>
    );
  }

  if (type === widgetNames.glideToRandomPosition) {
    return (
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={handleDisptach}
      >
        {"glide"}
        <input
          ref={xAxisRef}
          type="text"
          style={{
            width: "25px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          onClick={(e) => e.stopPropagation()}
          defaultValue={0}
        />
        {"secs to random position"}
      </div>
    );
  }

  return (
    <div
      draggable="true"
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={handleDisptach}
    >
      {"go to x :"}
      <input
        ref={xAxisRef}
        type="text"
        style={{
          width: "25px",
          color: "black",
          paddingLeft: "4px",
          margin: "0 4px",
          borderRadius: "40%",
        }}
        onClick={(e) => e.stopPropagation()}
        defaultValue={0}
      />
      {"y : "}
      <input
        ref={yAxisRef}
        type="text"
        style={{
          width: "25px",
          color: "black",
          paddingLeft: "4px",
          margin: "0 4px",
          borderRadius: "40%",
        }}
        onClick={(e) => e.stopPropagation()}
        defaultValue={0}
      />
    </div>
  );
};

//Looks
export const SayHelloForSecondsComponent = ({
  type = widgetNames.sayHello,
}) => {
  //hooks
  const dispatch = useDispatch();

  const inputRef = useRef();

  //constants
  let frontText = "";
  let backText = "";
  const isInputWidget = [
    widgetNames.sayHelloForSeconds,
    widgetNames.sayHmmForSeconds,
  ];
  const isInputVisible = isInputWidget.some((item) => item === type);

  switch (type) {
    case widgetNames.sayHello:
      frontText = "Say 'hello'";
      backText = "";
      break;
    case widgetNames.sayHelloForSeconds:
      frontText = "Say 'hello' for";
      backText = "seconds";
      break;
    case widgetNames.sayHmm:
      frontText = "Say 'hmm'";
      backText = "";
      break;
    case widgetNames.sayHmmForSeconds:
      frontText = "Say 'hmm' for";
      backText = "seconds";
      break;
    default:
      break;
  }

  //functions
  const handleDisptach = () => {
    if (
      type === widgetNames.sayHello ||
      type === widgetNames.sayHelloForSeconds
    ) {
      if (isInputVisible) {
        const value = parseInt(inputRef.current.value) * 1000;
        dispatch(handleSayHello(true));
        setTimeout(() => {
          dispatch(handleSayHello(false));
        }, value);
        return;
      }
      return dispatch(handleSayHello(true));
    }

    if (type === widgetNames.sayHmm || type === widgetNames.sayHmmForSeconds) {
      if (isInputVisible) {
        const value = parseInt(inputRef.current.value) * 1000;
        dispatch(handleSayHmm(true));
        setTimeout(() => {
          dispatch(handleSayHmm(false));
        }, value);
        return;
      }
      return dispatch(handleSayHmm(true));
    }
  };

  return (
    <div
      className="flex flex-row flex-wrap bg-violet text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={handleDisptach}
    >
      {frontText}
      {isInputVisible && (
        <input
          ref={inputRef}
          type="text"
          style={{
            width: "15px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          defaultValue={2}
          onClick={(e) => e.stopPropagation()}
        />
      )}
      {backText}
    </div>
  );
};

export const ShowHideComponent = ({type=widgetNames.show})=>{

  //hooks
  const dispatch = useDispatch();

  const text = type == widgetNames.show ? "Show" : "Hide";

  //functions
  const handleDisptach = () => {
    dispatch(handleVisibility(type === widgetNames.show))
  }

  return (
    <div
      className="flex flex-row flex-wrap bg-violet text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={handleDisptach}
    >{text}</div>
  )
}
