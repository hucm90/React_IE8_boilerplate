import React from 'react';
import Title from "Components/Title";

const styles = {
    col: {
        padding: "30px 0",
        color: "#fff",
        'text-align': "center",
        background: "rgba(0, 160, 233, 0.7)",
        border: "1px #1890ff solid",
    },
    row: {
        marginTop: "30px"
    }
};

export default class DemoGrid extends React.Component {

    render() {
        return (
            <div className="container">
                <Title>Demo Grid</Title>

                <div className="row" style={styles.row}>
                    <div className="col c1-8" style={styles.col}>c1-8</div>
                    <div className="col c1-4" style={styles.col}>c1-4</div>
                </div>

                <div className="row" style={styles.row}>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                    <div className="col c1-1" style={styles.col}>c1-1</div>
                </div>

                <div className="row" style={styles.row}>
                    <div className="col c1-4" style={styles.col}>c1-4</div>
                    <div className="col c1-4 c1-push4" style={styles.col}>c1-4 c1-push4</div>
                </div>

                <div className="row" style={styles.row}>
                    <div className="col c1-3 c1-offset3" style={styles.col}>c1-3 c1-offset3</div>
                    <div className="col c1-3 c1-offset3" style={styles.col}>c1-3 c1-offset3</div>
                </div>

                <div className="row" style={styles.row}>
                    <div className="col c1-3 c1-push9 c2-4 c2-push8" style={styles.col}>c1-3 c1-push9 c2-4 c2-push8</div>
                    <div className="col c1-9 c1-pull3 c2-8 c2-pull4" style={styles.col}>c1-9 c1-pull3 c2-8 c2-pull4</div>
                </div>

                <div className="row" style={styles.row}>
                    <div className="col c1-8 hidden2" style={styles.col}>c1-8 hidden2</div>
                </div>

                <div className="row" style={styles.row}>
                    <div className="col c1-8 hidden2 visible3" style={styles.col}>c1-8 hidden2 visible3</div>
                </div>
            </div>
        );
    }
}
