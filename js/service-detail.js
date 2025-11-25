const serviceData = {
    "makeup-co-dau": {
        title: "Makeup Cô Dâu",
        desc: "Trang điểm cô dâu đẹp tự nhiên hoặc quyến rũ. Bao gồm test trước ngày cưới để đảm bảo phong cách bạn yêu thích.",
        process: [
            "Tư vấn phong cách makeup và màu sắc phù hợp.",
            "Chăm sóc da mặt trước khi makeup.",
            "Trang điểm chính thức theo phong cách đã chọn.",
            "Check kỹ chi tiết, tạo lớp makeup bền lâu.",
        ],
        benefits: [
            "Tôn lên vẻ đẹp tự nhiên của cô dâu.",
            "Làm nổi bật các đường nét khuôn mặt.",
            "Giữ lớp makeup lâu suốt ngày cưới.",
        ],
        notes: [
            "Nên book lịch trước ít nhất 2 tuần.",
            "Có thể yêu cầu test makeup trước ngày cưới.",
            "Mang theo các phụ kiện nếu muốn phối hợp.",
        ],
        price: "Từ 1.500.000đ",
        img: "./images/demo_1.png"
    },
    "makeup-du-tiec": {
        title: "Makeup Dự Tiệc",
        desc: "Trang điểm dự tiệc sang trọng, lộng lẫy, giúp bạn nổi bật trong mọi bữa tiệc hoặc sự kiện quan trọng.",
        process: [
            "Tư vấn phong cách phù hợp với trang phục và sự kiện.",
            "Chăm sóc da và lớp nền.",
            "Trang điểm mắt, môi, má theo phong cách chọn.",
            "Hoàn thiện chi tiết và kiểm tra ánh sáng.",
        ],
        benefits: [
            "Tỏa sáng và tự tin tại sự kiện.",
            "Phong cách makeup chuyên nghiệp, hiện đại.",
            "Giữ lớp makeup lâu, không bị trôi.",
        ],
        notes: [
            "Đặt lịch ít nhất 1 tuần trước sự kiện.",
            "Mang theo trang phục nếu muốn phối màu.",
        ],
        price: "Từ 800.000đ",
        img: "./images/demo_2.png"
    },
    "makeup-nhe-nhang": {
        title: "Makeup Nhẹ Nhàng",
        desc: "Makeup tự nhiên, nhẹ nhàng cho mọi dịp, giúp bạn tôn lên vẻ đẹp tinh tế mà vẫn trẻ trung.",
        process: [
            "Làm sạch và dưỡng da cơ bản.",
            "Trang điểm nền tự nhiên, che khuyết điểm nhẹ.",
            "Trang điểm mắt, môi nhẹ nhàng.",
            "Hoàn thiện lớp makeup trong suốt và tự nhiên.",
        ],
        benefits: [
            "Phong cách nhẹ nhàng, tinh tế.",
            "Phù hợp đi làm, gặp gỡ bạn bè, hẹn hò.",
            "Không gây nặng mặt, thoải mái cả ngày.",
        ],
        notes: [
            "Không yêu cầu test trước.",
            "Thích hợp với mọi loại da và độ tuổi.",
        ],
        price: "Từ 500.000đ",
        img: "./images/demo_3.png"
    },
    "nail-co-ban": {
        title: "Nail Art Cơ Bản",
        desc: "Dịch vụ làm móng cơ bản với nhiều màu sắc, kiểu dáng đa dạng, bao gồm cắt, dũa và sơn gel cơ bản.",
        process: [
            "Ngâm tay và làm sạch móng.",
            "Cắt và dũa móng theo yêu cầu.",
            "Sơn gel hoặc sơn thường theo màu chọn.",
            "Hoàn thiện và dưỡng móng sau khi sơn.",
        ],
        benefits: [
            "Móng tay gọn gàng, đẹp mắt.",
            "Tăng tính thẩm mỹ cho bàn tay.",
            "Màu sắc đa dạng, dễ phối đồ.",
        ],
        notes: [
            "Thời gian thực hiện 60-90 phút.",
            "Mang theo ý tưởng màu sắc nếu muốn.",
        ],
        price: "Từ 200.000đ",
        img: "./images/demo_4.png"
    },
    "nail-cao-cap": {
        title: "Nail Art Cao Cấp",
        desc: "Nail art 3D, đính đá, vẽ họa tiết độc đáo, sang trọng, tạo điểm nhấn hoàn hảo cho bàn tay của bạn.",
        process: [
            "Chuẩn bị móng và chăm sóc da tay.",
            "Thiết kế nail theo yêu cầu khách hàng.",
            "Đính đá, vẽ họa tiết chi tiết.",
            "Hoàn thiện và sấy khô lớp gel.",
        ],
        benefits: [
            "Phong cách sang trọng, nổi bật.",
            "Tạo điểm nhấn đặc biệt cho sự kiện.",
            "Đa dạng mẫu mã và màu sắc.",
        ],
        notes: [
            "Đặt lịch trước để chuẩn bị mẫu.",
            "Giữ móng tránh tiếp xúc nước mạnh trong 24h.",
        ],
        price: "Từ 400.000đ",
        img: "./images/demo_5.png"
    },
    "combo": {
        title: "Dịch Vụ Combo",
        desc: "Combo makeup + nail với ưu đãi đặc biệt, chăm sóc toàn diện, tiết kiệm chi phí.",
        process: [
            "Tư vấn combo phù hợp nhu cầu.",
            "Thực hiện makeup và nail theo trình tự.",
            "Kiểm tra chi tiết cuối cùng.",
        ],
        benefits: [
            "Tiết kiệm chi phí.",
            "Chăm sóc toàn diện từ đầu đến chân.",
            "Phong cách đồng bộ, đẹp hài hòa.",
        ],
        notes: [
            "Nên đặt lịch trước 1-2 tuần.",
            "Có thể yêu cầu test makeup trước khi thực hiện combo.",
        ],
        price: "Từ 1.200.000đ",
        img: "./images/demo_6.png"
    },
};

// Lấy query string
const params = new URLSearchParams(window.location.search);
const serviceKey = params.get('service');

if (serviceKey && serviceData[serviceKey]) {
    const data = serviceData[serviceKey];
    document.getElementById('service-title').innerText = data.title;
    document.getElementById('service-desc').innerText = data.desc;
    document.getElementById('service-price').innerText = data.price;
    document.getElementById('service-img').src = data.img;

    const processEl = document.getElementById('service-process');
    data.process.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        processEl.appendChild(li);
    });

    const benefitsEl = document.getElementById('service-benefits');
    data.benefits.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        benefitsEl.appendChild(li);
    });

    const notesEl = document.getElementById('service-notes');
    data.notes.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        notesEl.appendChild(li);
    });
} else {
    document.getElementById('service-title').innerText = "Dịch vụ không tồn tại";
}
