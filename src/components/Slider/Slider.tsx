import "./slider.scss";
import { SliderContent } from "./SliderContent/SliderContent";
import { SliderDots } from "./SliderDots/SliderDots";

export const Slider = () => {
    return (
        <section className="slider">
            <div className="slider-container">
                <SliderContent />
                <div className="slider__actions">
                    <button className="slider__btn">Learn</button>
                    <SliderDots />
                </div>
            </div>
        </section>
    );
};
