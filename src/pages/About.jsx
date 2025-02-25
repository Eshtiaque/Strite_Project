import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-[400px] flex justify-center items-center">
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse mb-16">

        <div className="text-center">
          <h1 className="text-7xl  text-blue-500 font-bold">Recipe Relay</h1>
          <p className="py-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti porro distinctio odio dolor dolorem eum repudiandae. Perspiciatis repellat temporibus iste necessitatibus quod praesentium consequatur eaque ducimus ipsum ipsam, quis saepe architecto! Beatae, sequi cupiditate magnam ex in unde. Tempore voluptatem corporis ut hic labore minus ab, sed iste provident accusamus accusantium est dolor, omnis magni enim vero quos eligendi dolorum perspiciatis et illum in doloremque voluptate quo? Odio voluptatem iure veritatis, consequuntur placeat asperiores repellendus sint quod deleniti voluptate. Aliquam quos nulla, nobis eligendi animi repellat! Aperiam nisi eum debitis maiores perferendis officia qui unde? Dolorum dolorem debitis nulla!
          </p>
          <Link to="/home"><button className="btn bg-orange-500 text-white">Get Started</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
}
