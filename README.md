# Web TMĐT - Ecommerce Management System

Nền tảng thương mại điện tử toàn diện với giao diện người dùng hiện đại và hệ thống quản lý backend mạnh mẽ.

## 📋 Mục Lục

- [Giới thiệu](#giới-thiệu)
- [Cấu trúc Dự Án](#cấu-trúc-dự-án)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Cài Đặt](#cài-đặt)
- [Chạy Ứng Dụng](#chạy-ứng-dụng)
- [Các Tính Năng](#các-tính-năng)
- [API Documentation](#api-documentation)
- [Contributor](#contributor)

## 🎯 Giới Thiệu

Web TMĐT là một nền tảng thương mại điện tử đầy đủ chức năng, cho phép người bán quản lý sản phẩm, đơn hàng, khách hàng và các hoạt động kinh doanh khác. Nền tảng này được xây dựng với công nghệ hiện đại nhằm cung cấp trải nghiệm người dùng tuyệt vời.

## 📁 Cấu Trúc Dự Án

```
Web-TMDT-Official/
├── ecommerce-management/          # Frontend (Next.js)
│   ├── app/                        # Next.js App Router
│   │   ├── (main)/                 # Public routes
│   │   ├── admin/                  # Admin dashboard
│   │   └── auth/                   # Authentication routes
│   ├── components/                 # React components
│   ├── context/                    # React Context (Auth, Cart)
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility functions
│   ├── public/                     # Static files
│   ├── service/                    # API services
│   ├── styles/                     # Global styles
│   ├── package.json
│   ├── tailwind.config.ts          # Tailwind CSS config
│   ├── tsconfig.json               # TypeScript config
│   └── next.config.mjs             # Next.js config
│
└── ecommerce-management-BE/        # Backend (Node.js/Express)
    ├── src/
    │   ├── config/                 # Configuration files
    │   ├── controllers/            # Route controllers
    │   ├── dto/                    # Data Transfer Objects
    │   ├── middlewares/            # Express middlewares
    │   ├── models/                 # Database models
    │   ├── providers/              # External services
    │   ├── routes/                 # API routes
    │   ├── services/               # Business logic
    │   ├── sockets/                # WebSocket handlers
    │   ├── utils/                  # Utility functions
    │   └── validations/            # Data validations
    ├── http/                       # HTTP request samples
    ├── package.json
    ├── tsconfig.json               # TypeScript config
    ├── Dockerfile                  # Docker configuration
    ├── docker-compose.yml          # Docker Compose setup
    └── server.ts                   # Entry point
```

## 🛠 Công Nghệ Sử Dụng

### Frontend
- **Framework**: Next.js 14+ (React 18+)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Authentication**: OAuth (Google)
- **Chat**: Groq AI Integration

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (assumed)
- **Real-time**: Socket.io
- **Authentication**: JWT
- **Validation**: Express validator
- **Containerization**: Docker

## 🚀 Cài Đặt

### Yêu Cầu
- Node.js >= 18.0
- pnpm >= 8.0 (hoặc npm/yarn)
- Docker (tùy chọn)

### 1. Clone Repository
```bash
git clone <repository-url>
cd Web-TMDT-Official
```

### 2. Cài Đặt Frontend
```bash
cd ecommerce-management
pnpm install
# hoặc
npm install
```

### 3. Cài Đặt Backend
```bash
cd ../ecommerce-management-BE
pnpm install
# hoặc
npm install
```

### 4. Cấu Hình Environment

**Frontend** - Tạo file `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

**Backend** - Tạo file `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## ⚡ Chạy Ứng Dụng

### Phát Triển

**Frontend** (Terminal 1):
```bash
cd ecommerce-management
pnpm dev
# Truy cập: http://localhost:3000
```

**Backend** (Terminal 2):
```bash
cd ecommerce-management-BE
pnpm dev
# Chạy trên: http://localhost:5000
```

### Production

**Frontend**:
```bash
cd ecommerce-management
pnpm build
pnpm start
```

**Backend**:
```bash
cd ecommerce-management-BE
pnpm build
pnpm start
```

### Docker

```bash
cd ecommerce-management-BE
docker-compose up -d
```

## ✨ Các Tính Năng

### Cho Khách Hàng
- ✅ Duyệt và tìm kiếm sản phẩm
- ✅ Giỏ hàng và checkout
- ✅ Thanh toán trực tuyến
- ✅ Quản lý đơn hàng
- ✅ Viết và xem nhận xét sản phẩm
- ✅ Hồ sơ cá nhân
- ✅ Đăng nhập với Google
- ✅ Chat với AI chatbot

### Cho Quản Trị Viên
- ✅ Quản lý sản phẩm
- ✅ Quản lý danh mục
- ✅ Quản lý đơn hàng
- ✅ Quản lý khách hàng
- ✅ Quản lý khuyến mãi/discount
- ✅ Quản lý banner quảng cáo
- ✅ Quản lý đánh giá sản phẩm
- ✅ Quản lý newsletter
- ✅ Dashboard phân tích

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints Chính

#### Authentication
- `POST /auth/register` - Đăng ký tài khoản
- `POST /auth/login` - Đăng nhập
- `POST /auth/logout` - Đăng xuất
- `POST /auth/google` - Đăng nhập với Google

#### Products
- `GET /products` - Danh sách sản phẩm
- `GET /products/:id` - Chi tiết sản phẩm
- `POST /products` - Tạo sản phẩm (Admin)
- `PUT /products/:id` - Cập nhật sản phẩm (Admin)
- `DELETE /products/:id` - Xóa sản phẩm (Admin)

#### Cart
- `GET /cart` - Xem giỏ hàng
- `POST /cart/add` - Thêm vào giỏ
- `PUT /cart/update` - Cập nhật giỏ
- `DELETE /cart/remove/:id` - Xóa khỏi giỏ

#### Orders
- `GET /orders` - Danh sách đơn hàng
- `POST /orders` - Tạo đơn hàng
- `GET /orders/:id` - Chi tiết đơn hàng
- `PUT /orders/:id` - Cập nhật đơn hàng

#### Categories
- `GET /categories` - Danh sách danh mục
- `POST /categories` - Tạo danh mục (Admin)

#### Discounts
- `GET /discounts` - Danh sách khuyến mãi
- `POST /discounts` - Tạo khuyến mãi (Admin)

Chi tiết đầy đủ xem tại: `ecommerce-management-BE/http/`

## 📂 Cấu Trúc Thư Mục - Frontend

```
ecommerce-management/
├── app/
│   ├── (main)/          # Public pages
│   │   ├── about/       # Trang về chúng tôi
│   │   ├── blog/        # Blog
│   │   ├── cart/        # Giỏ hàng
│   │   ├── checkout/    # Thanh toán
│   │   ├── contact/     # Liên hệ
│   │   ├── login/       # Đăng nhập
│   │   ├── register/    # Đăng ký
│   │   ├── shop/        # Cửa hàng
│   │   └── profile/     # Hồ sơ người dùng
│   ├── admin/           # Admin dashboard
│   │   ├── products/    # Quản lý sản phẩm
│   │   ├── categories/  # Quản lý danh mục
│   │   ├── orders/      # Quản lý đơn hàng
│   │   ├── accounts/    # Quản lý tài khoản
│   │   ├── banners/     # Quản lý banner
│   │   ├── discounts/   # Quản lý khuyến mãi
│   │   └── newsletter/  # Quản lý newsletter
│   └── auth/            # Authentication callbacks
├── components/          # Reusable components
│   ├── ui/              # UI components (shadcn)
│   ├── admin/           # Admin components
│   ├── cart/            # Cart components
│   └── product/         # Product components
├── context/             # React Context
│   ├── AuthContext.tsx  # Auth context
│   └── cart-context.tsx # Cart context
├── hooks/               # Custom hooks
├── lib/                 # Utilities
├── service/             # API services
└── public/              # Static files
```

## 📂 Cấu Trúc Thư Mục - Backend

```
ecommerce-management-BE/
├── src/
│   ├── config/          # Database, environment config
│   ├── controllers/     # Route handlers
│   ├── dto/             # Data validation schemas
│   ├── middlewares/     # Express middlewares
│   ├── models/          # Database schemas
│   ├── providers/       # Payment, email services
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── sockets/         # WebSocket events
│   ├── utils/           # Helper functions
│   └── validations/     # Input validation
├── http/                # Sample HTTP requests
│   ├── auth.http
│   ├── products.http
│   ├── orders.http
│   └── cart.http
└── server.ts            # Entry point
```

## 🔑 Các Tập Tin Quan Trọng

### Frontend
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration

### Backend
- `server.ts` - Application entry point
- `docker-compose.yml` - Docker services setup
- `Dockerfile` - Backend Docker image

## 🧪 Testing

```bash
# Frontend tests
cd ecommerce-management
pnpm test

# Backend tests
cd ../ecommerce-management-BE
pnpm test
```

## 📝 Linting & Formatting

```bash
# Frontend
cd ecommerce-management
pnpm lint

# Backend
cd ../ecommerce-management-BE
pnpm lint
```

## 🐛 Troubleshooting

### Frontend không kết nối được backend
- Kiểm tra NEXT_PUBLIC_API_URL trong `.env.local`
- Đảm bảo backend đang chạy trên port đúng
- Kiểm tra CORS settings trên backend

### Database connection error
- Kiểm tra MongoDB URI trong `.env`
- Đảm bảo MongoDB service đang chạy
- Kiểm tra permissions database

### Port bị chiếm dụng
```bash
# Tìm process sử dụng port
lsof -i :3000  # Frontend
lsof -i :5000  # Backend

# Kill process
kill -9 <PID>
```

## 📞 Support & Contact

- Email: support@web-tmdt.com
- Issues: Report tại GitHub Issues
- Discussion: GitHub Discussions

## 📄 License

MIT License - xem file LICENSE để chi tiết

## 👥 Contributors

Cảm ơn tất cả những người đóng góp cho dự án này!

---

**Last Updated**: 2026-06-10
