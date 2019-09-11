import React from 'react';
import { Article, Line, Photo, Rect } from "Components/Skeleton";

export default function DemoSkeleton() {

    return (
        <div>
            <h1>Skeleton (骨架)</h1>

            <div style={{ width: "400px" }}>
                <div style={{ float: "left" }}>
                    <Photo width={100} />
                </div>

                <div style={{ marginLeft: "120px" }}>
                    <p><Line width="50%" /></p>
                    <p><Line /></p>
                    <p><Line /></p>
                    <p><Line /></p>
                </div>

                <p><Line /></p>
            </div>

            <div style={{ display: "flex" }}>
                <div className="row">
                    <div className="c1-3"><Rect width={200} height={150}></Rect></div>
                    <div className="c1-3"><Rect width={200} height={150}></Rect></div>
                    <div className="c1-3"><Rect width={200} height={150}></Rect></div>
                    <div className="c1-3"><Rect width={200} height={150}></Rect></div>
                </div>
            </div>

            <div style={{ width: "600px" }}>
                <Article />
            </div>
        </div>
    );
}
