import { NavLink, Routes, Route, Link } from 'react-router-dom';
import { ShieldCheck, Activity, LockKeyhole, Network, ArrowUpRight, Menu, Search, Bell, CheckCircle2, Globe, Server, Eye, ChevronRight } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/about-us', label: 'Giới thiệu' },
  { to: '/services', label: 'Dịch vụ' },
  { to: '/dashboard', label: 'Giám sát' },
  { to: '/contact', label: 'Liên hệ' },
];

function Header() {
  return <header className="header">
    <Link to="/" className="brand"><span className="brand-icon"><ShieldCheck size={23}/></span><span>Cyber<span className="brand-accent">Shield</span></span></Link>
    <nav className="nav">{navItems.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}</nav>
    <Link to="/dashboard" className="header-cta">Mở bảng điều khiển <ArrowUpRight size={16}/></Link>
  </header>;
}

function Footer() {
  return <footer className="footer"><div className="brand"><span className="brand-icon"><ShieldCheck size={20}/></span><span>Cyber<span className="brand-accent">Shield</span></span></div><p>Giao diện minh họa cho bài lab ReactJS.</p><span>© 2026 CyberShield. Dự án học tập.</span></footer>;
}

function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot"/> NỀN TẢNG AN NINH MẠNG</div>
        <h1>Bảo vệ hệ thống.<br/><span>Phát hiện mối đe dọa.</span></h1>
        <p className="hero-desc">Theo dõi sự kiện an ninh, nhận diện hoạt động đáng ngờ và quản lý rủi ro trên một giao diện tập trung.</p>
        <div className="hero-actions"><Link className="btn-primary" to="/dashboard">Khám phá hệ thống <ArrowUpRight size={17}/></Link><Link className="btn-secondary" to="/about-us">Tìm hiểu thêm <ChevronRight size={17}/></Link></div>
        <div className="hero-proof"><div className="avatar-stack"><span>AT</span><span> SOC</span><span>IT</span></div><div><strong>Security Operations</strong><small>Giám sát · Phân tích · Phản ứng</small></div></div>
      </div>
      <div className="hero-visual">
        <div className="visual-glow"/>
        <div className="radar"><div className="radar-ring ring-one"/><div className="radar-ring ring-two"/><div className="radar-ring ring-three"/><div className="radar-sweep"/><span className="radar-center"><ShieldCheck size={35}/></span><i className="radar-point point-one"/><i className="radar-point point-two"/><i className="radar-point point-three"/></div>
        <div className="floating-card threat-card"><span className="card-icon warning"><Activity size={17}/></span><div><small>Trạng thái hệ thống</small><strong>Đang được giám sát</strong></div><span className="status-pill">LIVE</span></div>
        <div className="floating-card scan-card"><span className="card-icon success"><CheckCircle2 size={18}/></span><div><small>Phân tích sự kiện</small><strong>Phát hiện theo thời gian thực</strong></div></div>
        <div className="visual-label"><span className="live-dot"/> SECURITY MONITORING <span>•</span> ACTIVE</div>
      </div>
    </section>
    <section className="metrics">
      <div className="metric"><span className="metric-icon"><Activity size={20}/></span><div><strong>Real-time</strong><small>Giám sát sự kiện</small></div></div>
      <div className="metric"><span className="metric-icon"><Eye size={20}/></span><div><strong>Threat Detection</strong><small>Phát hiện bất thường</small></div></div>
      <div className="metric"><span className="metric-icon"><Network size={20}/></span><div><strong>Network Security</strong><small>Quan sát lưu lượng mạng</small></div></div>
      <div className="metric"><span className="metric-icon"><LockKeyhole size={20}/></span><div><strong>Access Control</strong><small>Kiểm soát truy cập</small></div></div>
    </section>
    <section className="section feature-section"><div className="section-heading"><div><div className="eyebrow">GIẢI PHÁP CỦA CHÚNG TÔI</div><h2>An ninh chủ động,<br/><span>kiểm soát toàn diện.</span></h2></div><p>Kết hợp quan sát, phân tích và phản ứng để giúp đội ngũ bảo mật hiểu rõ hơn những gì đang diễn ra trong hệ thống.</p></div>
      <div className="feature-grid">
        <article className="feature-card"><span className="feature-icon blue"><Activity/></span><h3>Giám sát an ninh</h3><p>Tập trung các sự kiện hệ thống và theo dõi dấu hiệu bất thường từ một nơi.</p><Link to="/dashboard">Xem giám sát <ArrowUpRight size={15}/></Link></article>
        <article className="feature-card"><span className="feature-icon purple"><Eye/></span><h3>Phân tích mối đe dọa</h3><p>Hỗ trợ nhận diện hoạt động đáng ngờ và ưu tiên sự kiện cần điều tra.</p><Link to="/services">Khám phá tính năng <ArrowUpRight size={15}/></Link></article>
        <article className="feature-card"><span className="feature-icon green"><LockKeyhole/></span><h3>Quản lý truy cập</h3><p>Minh họa cách theo dõi thiết bị, địa chỉ IP và chính sách truy cập mạng.</p><Link to="/services">Tìm hiểu thêm <ArrowUpRight size={15}/></Link></article>
      </div>
    </section>
    <section className="cta-band"><div><div className="eyebrow">BẮT ĐẦU NGAY</div><h2>Sẵn sàng quan sát hệ thống của bạn?</h2><p>Truy cập trang giám sát để khám phá giao diện mẫu.</p></div><Link className="btn-primary" to="/dashboard">Mở bảng điều khiển <ArrowUpRight size={17}/></Link></section>
  </>;
}

function PageHero({tag, title, highlight, desc}) {
  return <section className="page-hero"><div className="eyebrow"><span className="live-dot"/>{tag}</div><h1>{title}<br/><span>{highlight}</span></h1><p>{desc}</p></section>;
}

function About() {
  return <><PageHero tag="VỀ CYBERSHIELD" title="Bảo mật bắt đầu từ" highlight="khả năng quan sát." desc="CyberShield là giao diện minh họa cho hệ thống giám sát an ninh mạng, hướng đến việc trình bày thông tin rõ ràng và hỗ trợ quy trình phân tích sự kiện."/>
  <section className="section split-section"><div><div className="eyebrow">SỨ MỆNH</div><h2>Biến dữ liệu an ninh thành thông tin dễ hành động.</h2><p className="body-copy">Trong môi trường số, việc theo dõi các sự kiện và nhận biết hoạt động bất thường là bước quan trọng để bảo vệ hệ thống. CyberShield mô phỏng giao diện tổng quan dành cho người học và đội ngũ vận hành an ninh.</p></div><div className="about-points"><div><span><Eye/></span><div><h3>Quan sát rõ ràng</h3><p>Tổng hợp trạng thái và sự kiện nổi bật trên cùng một giao diện.</p></div></div><div><span><Activity/></span><div><h3>Phân tích có trọng tâm</h3><p>Ưu tiên thông tin để người vận hành dễ dàng theo dõi.</p></div></div><div><span><ShieldCheck/></span><div><h3>Hướng đến an toàn</h3><p>Khuyến khích quy trình giám sát, kiểm tra và phản ứng phù hợp.</p></div></div></div></section></>;
}

function Services() {
  const services = [
    [Activity, 'Giám sát sự kiện', 'Theo dõi các sự kiện bảo mật và trạng thái hoạt động của hệ thống.'],
    [Eye, 'Phân tích mối đe dọa', 'Phân loại cảnh báo để hỗ trợ quá trình xem xét và điều tra.'],
    [Network, 'Giám sát mạng', 'Quan sát thiết bị, kết nối và các dấu hiệu bất thường trên mạng.'],
    [LockKeyhole, 'Kiểm soát truy cập', 'Minh họa quản lý danh sách cho phép và danh sách chặn.'],
  ];
  return <><PageHero tag="TÍNH NĂNG" title="Công cụ cho một" highlight="hệ thống an toàn hơn." desc="Các nhóm chức năng chính được trình bày trong giao diện mẫu của dự án."/><section className="section feature-grid service-grid">{services.map(([Icon,title,desc],i)=><article className="feature-card" key={title}><span className="feature-icon blue"><Icon/></span><div className="service-number">0{i+1}</div><h3>{title}</h3><p>{desc}</p></article>)}</section></>;
}

function Dashboard() {
  const events = [
    ['10:42:18', 'Lưu lượng truy cập bất thường', '192.168.1.24', 'Cần xem xét', 'warning'],
    ['10:39:04', 'Đăng nhập thành công', '192.168.1.12', 'Bình thường', 'normal'],
    ['10:31:52', 'Quét cổng được ghi nhận', '10.0.0.18', 'Cảnh báo', 'danger'],
    ['10:28:17', 'Thiết bị mới kết nối', '192.168.1.36', 'Đang theo dõi', 'warning'],
  ];
  return <><PageHero tag="SECURITY OPERATIONS CENTER" title="Tổng quan" highlight="giám sát an ninh." desc="Bảng điều khiển dữ liệu minh họa. Các chỉ số bên dưới không lấy từ hệ thống bảo mật thực tế."/><section className="section dashboard-section"><div className="dashboard-top"><h2><Activity size={21}/> Tổng quan hệ thống</h2><span className="demo-label">DỮ LIỆU DEMO</span></div><div className="dashboard-stats"><div className="stat-card"><span>Sự kiện hôm nay</span><strong>1,284</strong><small className="positive">↑ 12% so với hôm qua</small></div><div className="stat-card"><span>Cảnh báo cần xem</span><strong>08</strong><small className="yellow-text">Cần phân tích thêm</small></div><div className="stat-card"><span>Thiết bị đang theo dõi</span><strong>36</strong><small className="positive">● Đang hoạt động</small></div><div className="stat-card"><span>Trạng thái hệ thống</span><strong className="online-text">Ổn định</strong><small className="positive">● Demo trực tuyến</small></div></div>
  <div className="events-panel"><div className="events-header"><div><h3>Sự kiện bảo mật gần đây</h3><p>Danh sách sự kiện mẫu để minh họa giao diện.</p></div><button className="filter-btn"><Search size={15}/> Lọc sự kiện</button></div><div className="table-wrap"><table><thead><tr><th>Thời gian</th><th>Sự kiện</th><th>Địa chỉ IP</th><th>Trạng thái</th></tr></thead><tbody>{events.map(e=><tr key={e[0]}><td className="time-cell">{e[0]}</td><td>{e[1]}</td><td className="ip-cell">{e[2]}</td><td><span className={`event-status ${e[4]}`}>{e[3]}</span></td></tr>)}</tbody></table></div></div></section></>;
}

function Contact() {
  return <><PageHero tag="LIÊN HỆ" title="Cùng xây dựng" highlight="không gian số an toàn." desc="Bạn có câu hỏi về giao diện hoặc muốn tìm hiểu thêm về dự án học tập? Hãy gửi lời nhắn qua biểu mẫu bên dưới."/><section className="section contact-layout"><div className="contact-info"><h2>Liên hệ với chúng tôi</h2><p className="body-copy">Đây là biểu mẫu giao diện phục vụ bài thực hành ReactJS. Khi triển khai thực tế, có thể kết nối biểu mẫu với backend để gửi thông tin.</p><div className="contact-detail"><span><Globe/></span><div><strong>Website</strong><p>www.cybershield.example</p></div></div><div className="contact-detail"><span><Server/></span><div><strong>Dự án</strong><p>ReactJS · Vite · React Router</p></div></div></div><form className="contact-form" onSubmit={e=>{e.preventDefault();window.alert('Đã gửi biểu mẫu demo!');}}><label>Họ và tên<input required placeholder="Nhập họ tên của bạn"/></label><label>Email<input type="email" required placeholder="name@example.com"/></label><label>Nội dung<textarea required rows="4" placeholder="Bạn muốn trao đổi điều gì?"/></label><button className="btn-primary" type="submit">Gửi thông tin <ArrowUpRight size={16}/></button></form></section></>;
}

function NotFound() {
  return <section className="page-hero not-found"><div className="eyebrow">404 · KHÔNG TÌM THẤY</div><h1>Trang không <span>tồn tại.</span></h1><p>Địa chỉ bạn truy cập không hợp lệ hoặc trang đã được chuyển đi.</p><Link className="btn-primary" to="/">Quay về trang chủ <ArrowUpRight size={16}/></Link></section>;
}

export default function App() {
  return <div className="app-shell"><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about-us" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/dashboard" element={<Dashboard/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></div>;
}