
export interface Announcement {
  title: string;
  content: string;
  type: "default"; // 公告类型
  status: boolean; // 状态
  createdAt: Date;
}

