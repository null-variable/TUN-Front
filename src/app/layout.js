import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TUN',
  description: '이 플랫폼은 프로그래밍 대회나 공모전 등 다양한 대회에 참가하려는 학생들이 자신의 역량과 관심 분야를 공유하며 적절한 팀원들을 모집하고, 팀을 구성할 수 있도록 돕는 서비스입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
