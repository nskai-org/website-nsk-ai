import { SVGProps } from 'react';
import JoinCommunity from  './join-community-hero.svg';
import LearnMore from './learn-more.svg';
import GetInTouch from './get-in-touch.svg';
import ArrowDown from './arrow-down.svg'
import Exclamation from './exclamation.svg'
import Rectangle from './rectangle.svg'
// import 

export {JoinCommunity,LearnMore,GetInTouch,ArrowDown,Exclamation,Rectangle}

export function Hamburger(props: SVGProps<SVGSVGElement>){
    return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2H6m5 5H3.5m5 5h-8"/></svg>
}
export function Cancel(props: SVGProps<SVGSVGElement>){
    return<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
}