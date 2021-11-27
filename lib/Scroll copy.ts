import type { DirectionType, ScrollDataType, XYType } from "../types/scroll";

export const SCROLL_END_DURATION: number = 100;

class Scroll {
    scrolling: boolean = false
    time: number = 0
    direction: DirectionType = {
        x: null,
        y: null
    }
    speed: XYType = {
        x: 0,
        y: 0
    }
    totalDistance: XYType = {
        x: 0,
        y: 0
    }
    relativeDistance: XYType = {
        x: 0,
        y: 0
    }
    position: XYType = {
        x: 0,
        y: 0
    }

    // constructor(
    //     scrolling: boolean = false,
    //     time: number = 0,
    //     direction: DirectionType = {
    //         x: null,
    //         y: null
    //     },
    //     speed: XYType = {
    //         x: 0,
    //         y: 0
    //     },
    //     totalDistance: XYType = {
    //         x: 0,
    //         y: 0
    //     },
    //     relativeDistance: XYType = {
    //         x: 0,
    //         y: 0
    //     },
    //     position: XYType = {
    //         x: 0,
    //         y: 0
    //     }) {
    // }
    constructor(scrolling: boolean, time: number, direction: DirectionType, speed: XYType, totalDistance: XYType, relativeDistance: XYType, position: XYType) {
        this.scrolling = scrolling
        this.position = position
        this.direction = direction
        this.time = time
        this.speed = speed
        this.totalDistance = totalDistance
        this.relativeDistance = relativeDistance
    }

    get scrollDataType(): ScrollDataType {
        const data: ScrollDataType = {
            scrolling: this.scrolling,
            time: this.time,
            direction: this.direction,
            speed: this.speed,
            totalDistance: this.totalDistance,
            relativeDistance: this.relativeDistance,
            position: this.position
        }
        return data
    }
    getPositionX(): number {
        return window.pageXOffset || 0;
    }

    getPositionY(): number {
        return window.pageYOffset || 0;
    }

    getDirectionX(x: number, frameValues: ScrollDataType): string | null {
        if (x > frameValues.position.x) return "right";
        if (x < frameValues.position.x) return "left";
        return null;
    }

    getDirectionY(y: number, frameValues: ScrollDataType): string | null {
        if (y > frameValues.position.y) return "down";
        if (y < frameValues.position.y) return "up";
        return null;
    }

    getTotalDistanceX(x: number, frameValues: ScrollDataType): number {
        return frameValues.totalDistance.x + Math.abs(x - frameValues.position.x);
    }

    getTotalDistanceY(y: number, frameValues: ScrollDataType): number {
        return frameValues.totalDistance.y + Math.abs(y - frameValues.position.y);
    }

    getRelativeDistanceX(x: number, startValues: ScrollDataType): number {
        return Math.abs(x - startValues.position.x);
    }

    getRelativeDistanceY(y: number, startValues: ScrollDataType): number {
        return Math.abs(y - startValues.position.y);
    }
}

export default Scroll