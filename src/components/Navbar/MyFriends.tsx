import {MyFriend} from "./Friend";
import {FriendType} from "../../redux/sidebar-reducer";
import {MyFriendsPropsType} from "./MyFriendsContainer";


export function MyFriends(props: MyFriendsPropsType) {

    let myFriendElement = props.myFriends.map((f: FriendType) => <MyFriend key={f.id} name={f.name} id={f.id}/>)

    return (
        <div>
            {myFriendElement}
        </div>
    )

}