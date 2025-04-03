/** @jsx createVNode */
import { createVNode } from "../../lib";
import { globalStore } from "../../stores";

export const PostForm = () => {
  const handlePost = (e) => {
    e.preventDefault();
    const oldPost = globalStore.getState().posts;

    const newPost = {
      id: oldPost.length + 1,
      author: globalStore.getState().currentUser.username,
      time: Date.now(),
      content: document.getElementById("post-content").value,
      likeUsers: [],
    };

    const posts = [...oldPost, newPost];
    globalStore.setState({ posts });
  };

  return (
    <div className="mb-4 bg-white rounded-lg shadow p-4">
      <textarea
        id="post-content"
        placeholder="무슨 생각을 하고 계신가요?"
        className="w-full p-2 border rounded"
      />
      <button
        id="post-submit"
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handlePost}
      >
        게시
      </button>
    </div>
  );
};
