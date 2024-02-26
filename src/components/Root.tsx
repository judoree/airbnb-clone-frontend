import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <h1>
      im root
      <Outlet />
      {/* Outlet이 하는 일은 루트의 중앙에 내가 렌더링 하고싶은 컴포넌트 위치 */}
    </h1>
  );
}
