import { Avatar, Card } from "antd";

export default function Post({ post }) {
  return (
    <Card
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
