import React, { useState } from 'react';

function MainView() {
    const [menu_open, set_menu_open] = useState(false);

    return (
            <div>
                <p className="a1">
                    This is some <span className="a2">Test Text</span>.
                </p>

                <p className="a1"><span className="a2">[2/12/19 02:45] ፏ:</span> Humans do not understand humans. Humans do not listen to wolves. Understand ?</p>
                <p className="b1"><span className="b2">[1/29/19 12:12] Me:</span> Also there's a piece of ice at the bottom of the lake.</p>
                <p className="c1"><span className="c2">[1/29/19 12:12] ዀ:</span> There is a piece of ice there </p>
                <p className="d1"><span className="d2">[1/29/19 12:14] ፗ:</span> Yeah? There is a piece of ice and also the sound of the crack could be heard </p>
                <p className="c1"><span className="c2">[1/29/19 12:15] ዀ:</span> I see, but it's a very weak piece and the crack could be heard </p>
                <p className="c1"><span className="c2">[1/29/19 12:16] ዀ:</span> It's a piece of ice which is much weaker than the sound of the crack</p>
            </div>
    );

}

export default MainView;