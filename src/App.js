import "./App.css";
import { useState } from "react";
import { shoeList } from "./data";
import {
    PlusOutlined,
    LoadingOutlined,
    LeftOutlined,
    RightOutlined,
} from "@ant-design/icons";
import { Space, Switch } from "antd";
function App() {
    const [index, setIndex] = useState(0);
    const [isActive, setIsActive] = useState(true);
    let shoe = shoeList[index];
    const handleChange = () => {
        setIsActive((current) => !current);
    };
    function handleNext() {
        if (index <= 3) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    function handlePrev() {
        if (index <= 3) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }
    return (
        <div className="App">
            <div
                className="wrap"
                style={{
                    height: isActive ? "300px" : "20px",
                    width: isActive ? "320px" : "120px",
                }}>
                <div className="nav-bar">
                    <div className="card__heart">
                        <Space>
                            <Switch defaultChecked onChange={handleChange} />
                            <LoadingOutlined
                                style={{
                                    display: isActive ? "none" : "block",
                                    color: "#fff",
                                    fontSize: "30px",
                                    marginLeft: "48px",
                                }}
                                spin
                            />
                        </Space>
                    </div>
                    <div
                        className="card__cart"
                        style={{ display: isActive ? "block" : "none" }}>
                        <Space>
                            <PlusOutlined
                                style={{ fontSize: "30px", color: "#fff" }}
                            />
                        </Space>
                    </div>
                </div>
                <div
                    className="card"
                    style={{
                        display: isActive ? "block" : "none",
                    }}>
                    <div className="card__img">
                        <img src={shoe.url} alt={shoe.alt} />
                    </div>
                    <div className="card__title">{shoe.name}</div>
                    <div className="card__price">${shoe.price}</div>
                    <div className="rest">
                        <div className="card__size">
                            <h3 className="info">Size: </h3>
                            <span>44</span>
                            <span>44.5</span>
                            <span>45</span>
                            <span>45.5</span>
                            <span>46</span>
                        </div>
                        <div className="card__color">
                            <h3 className="info">Color: </h3>
                            <span className="card__color--white"></span>
                            <span className="card__color--black"></span>
                        </div>
                        <div className="card__actions">
                            <Space
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                }}>
                                <LeftOutlined
                                    style={{ fontSize: "32px" }}
                                    onClick={handlePrev}
                                />
                                <RightOutlined
                                    style={{ fontSize: "32px" }}
                                    onClick={handleNext}
                                />
                            </Space>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
