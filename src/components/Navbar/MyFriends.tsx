import {FriendType} from "../../redux/state";
import {MyFriend} from "./Friend";


export type MyFriendsPropsType = {
    myFriends: Array<FriendType>
}


export function MyFriends({myFriends}: MyFriendsPropsType) {

    let myFriendElement = myFriends.map((f: FriendType) => <MyFriend key={f.id} name={f.name} id={f.id}/>)

    return (
        <div>
            {myFriendElement}
        </div>
    )

}