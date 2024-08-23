import React from "react";
import { GotoXandYComponent, Move10StepsComponent, SayHelloForSecondsComponent, ShowHideComponent, Turn15DegreeComponentRedo, Turn15DegreeComponentUndo, widgetNames } from "./constants";

export const widgetLibrary = {
    [widgetNames.move10Steps] : {
        name:widgetNames.move10Steps,
        component : <Move10StepsComponent/>
    },
    [widgetNames.turn15DegreeComponentUndo]:{
        name:widgetNames.turn15DegreeComponentUndo,
        component : <Turn15DegreeComponentUndo/>
    },
    [widgetNames.turn15DegreeComponentRedo]:{
        name:widgetNames.turn15DegreeComponentRedo,
        component : <Turn15DegreeComponentUndo type={widgetNames.turn15DegreeComponentRedo}/>
    },
    [widgetNames.gotoXandYComponent]:{
        name: widgetNames.gotoXandYComponent,
        component: <GotoXandYComponent/>
    },
    [widgetNames.gotoRandomPosition]:{
        name : widgetNames.gotoRandomPosition,
        component: <GotoXandYComponent type={widgetNames.gotoRandomPosition}/>
    },
    [widgetNames.glideToRandomPosition]:{
        name: widgetNames.glideToRandomPosition,
        component: <GotoXandYComponent type={widgetNames.glideToRandomPosition}/>
    },
    [widgetNames.setXPosition]:{
        name: widgetNames.setXPosition,
        component: <Move10StepsComponent type={widgetNames.setXPosition}/>
    },
    [widgetNames.setYPosition]:{
        name: widgetNames.setYPosition,
        component: <Move10StepsComponent type={widgetNames.setYPosition}/>
    },
    [widgetNames.changeYByValue]:{
        name: widgetNames.changeYByValue,
        component: <Move10StepsComponent type={widgetNames.changeYByValue}/>
    },
    [widgetNames.sayHello]:{
        name : widgetNames.sayHello,
        component : <SayHelloForSecondsComponent type={widgetNames.sayHello}/>
    },
    [widgetNames.sayHelloForSeconds]:{
        name: widgetNames.sayHelloForSeconds,
        component: <SayHelloForSecondsComponent type={widgetNames.sayHelloForSeconds}/>
    },
    [widgetNames.sayHmm]:{
        name: widgetNames.sayHmm,
        component:<SayHelloForSecondsComponent type={widgetNames.sayHmm}/>
    },
    [widgetNames.sayHmmForSeconds]:{
        name: widgetNames.sayHmm,
        component:<SayHelloForSecondsComponent type={widgetNames.sayHmmForSeconds}/>
    },
    [widgetNames.show]:{
        name: widgetNames.show,
        component: <ShowHideComponent type={widgetNames.show}/>
    },
    [widgetNames.hide]:{
        name: widgetNames.hide,
        component: <ShowHideComponent type={widgetNames.hide}/>
    },
}