
const Item = ({ item }) => {

    return (
        <>
            <div>
                <img src={item.thumbnail.lqip} />
        </div>
        <div>
                {item.title}
                {item.artist_title}
        </div>
        </>
    );


}

export default Item