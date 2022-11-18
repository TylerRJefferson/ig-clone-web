import { Avatar, Card, Space } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

export default function Post({ post, setPhotoList }) {
  const likeButton = () => {
    // send a patch req to photos/photoId
    fetch("https://express-ts-tj.web.app/photos/" + post.photoId,{
      method: "PATCH"
    })
      .then(results => results.json())
      .then(newListOfPhotos => {
        setPhotoList(newListOfPhotos)
      })
      .catch(alert)
    // update photoList

  }

  return (
    <Card
      hoverable
      actions={[
          <button onClick={likeButton}><HeartTwoTone twoToneColor="#eb2f96"/>Likes: {post.likes.toLocaleString()}</button>
      ]}
      style={{ width: 300}}
      cover={
        <img alt={post.description} src={post.photo} />
      }
    >
      <Card.Meta 
        avatar={<Avatar src="https://randomuser.me/api/portraits/men/6.jpg"/>}
        title={post.username}
        description={post.description}
      />
    </Card>
  )
}
