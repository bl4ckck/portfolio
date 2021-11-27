import type { DirectionType, OptionsType, ScrollDataType, XYType } from "../types/scroll";
import IScroll from "../types/scroll";

export const SCROLL_END_DURATION: number = 100;
export const DEFAULT_DIRECTION: DirectionType = {
    x: null,
    y: null
}
export const DEFAULT_SCROLL_DATA: ScrollDataType = {
    scrolling: false,
    time: 0,
    direction: {
        x: null,
        y: null
    },
    speed: {
        x: 0,
        y: 0
    },
    totalDistance: {
        x: 0,
        y: 0
    },
    relativeDistance: {
        x: 0,
        y: 0
    },
    position: {
        x: 0,
        y: 0
    },
}
export const DEFAULT_OPTIONS = {}

class Scroll implements IScroll {
    directionType: DirectionType
    scrollDataType: ScrollDataType
    options: OptionsType

    constructor(scrollDataType: ScrollDataType, directionType: DirectionType, options: OptionsType) {
        this.directionType = directionType
        this.scrollDataType = scrollDataType
        this.options = options
    }

    get scrollData(): ScrollDataType {
        const data: ScrollDataType = this.scrollDataType
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