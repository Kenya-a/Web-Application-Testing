import React, { useState, useEffect } from 'react';

function Display() {
  

    return (
        <div>
            <section className = 'scoreBoard'>

                    <div className="score">
                        <h2 className="score_num">Score</h2>
                        <div className="score_amount">{0}</div>
                    </div>

                <div className="topRow">

                    <div className="home">
                        <h2 className="home__name">Ball</h2>
                        <div className="home__score">{0}</div>
                    </div>
                    
                    <div className="away">
                        <h2 className="away__name">Strike!</h2>
                        <div className="away__score">{0}</div>
                    </div>

                </div>

            </section>

        </div>


    )
}

export default Display;