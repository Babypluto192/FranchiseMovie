import classes from "./rating.module.scss";
import Tr from "./Tr"
import {ratingList} from "./rating"

export default  function rating ()   {
    return (
        <div>

            <h1 className={classes.h1}>Это Рейтинг</h1>
            {/*<audio src="/jhoncena.mp3" autoPlay className={classes.audio} ></audio>*/}

            <table className={classes.table}>
                <tbody>
                <tr>
                    <th className={classes.createLineLeft}>#</th>
                    <th className={classes.createLineLeft}></th>
                    <th className={classes.createLineLeft2}>Имя</th>

                    <th className={classes.createLineLeft2}>Очки</th>
                </tr>
                {ratingList.map(el => (
                    <Tr key={el.key} nomer={el.nomer} photo={el.photo} name={el.name} points={el.points}/>
                    )

                )}


                </tbody>
            </table>
            <p className={classes.toScrol}>
                <br/>
            </p>
        </div>
    );
};
