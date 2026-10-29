import { SocialPillar } from '../types';

export const MAIN_TITLE = "AN SINH XÃ HỘI - ĐÍCH ĐẾN CỦA MỌI QUYẾT SÁCH";
export const SUB_TITLE = "Đồ họa tổng hợp các chỉ tiêu, con số phát triển an sinh xã hội và phục vụ nhân dân năm 2026";

export const SOCIAL_PILLARS: SocialPillar[] = [
  {
    id: 'housing',
    number: '01',
    title: 'An cư - nhà ở xã hội',
    shortTitle: 'Nhà ở xã hội',
    iconName: 'Home',
    colorTheme: {
      accent: 'amber',
      bgGradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      textAccent: 'text-amber-400',
      border: 'border-amber-500/30',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      progressFill: 'bg-amber-500',
    },
    fullText: 'Cả nước đã và đang triển khai 907 dự án nhà ở xã hội, với quy mô gần 858.500 căn hộ, tổng mức đầu tư gần 793.000 tỷ đồng. Năm 2027, cả nước phấn đấu hoàn thành 176.000 căn hộ nhà ở xã hội, nhà ở cho thuê. Nghị quyết 303/NQ-CP ngày 30-9-2026 của Chính phủ (về giao chỉ tiêu phát triển nhà ở xã hội, nhà ở cho thuê giai đoạn 2026-2030) còn giao chỉ tiêu cụ thể cho các địa phương, đặt mục tiêu đến năm 2030 phấn đấu hoàn thành hoặc vượt chỉ tiêu đầu tư xây dựng ít nhất 1 triệu căn hộ nhà ở xã hội, nhà ở cho thuê dành cho người thu nhập thấp, công nhân khu công nghiệp.',
    policyNote: 'Nghị quyết 303/NQ-CP ngày 30-9-2026 giao chỉ tiêu cụ thể cho các địa phương hoàn thành ít nhất 1 triệu căn hộ đến 2030.',
    keyStats: [
      {
        id: 'housing-projects',
        label: 'Dự án đã và đang triển khai',
        value: 907,
        unit: 'dự án',
        highlightText: 'Triển khai trên toàn quốc',
        type: 'number'
      },
      {
        id: 'housing-units',
        label: 'Quy mô căn hộ',
        value: 858500,
        unit: 'căn hộ',
        highlightText: 'Gần 858.500 căn hộ',
        type: 'number'
      },
      {
        id: 'housing-investment',
        label: 'Tổng mức đầu tư',
        value: 793000,
        unit: 'tỷ đồng',
        highlightText: 'Gần 793.000 tỷ đồng',
        type: 'currency'
      },
      {
        id: 'housing-2027',
        label: 'Mục tiêu hoàn thành năm 2027',
        value: 176000,
        unit: 'căn hộ',
        highlightText: 'Nhà ở xã hội và nhà ở cho thuê',
        type: 'number'
      },
      {
        id: 'housing-2030',
        label: 'Mục tiêu đến năm 2030',
        value: 1000000,
        prefix: '≥ ',
        unit: 'căn hộ',
        highlightText: 'Ít nhất 1 triệu căn (NQL 303/NQ-CP)',
        badge: 'Nghị quyết 303/NQ-CP 30/9/2026',
        type: 'number'
      }
    ]
  },
  {
    id: 'financial-support',
    number: '02',
    title: 'Hỗ trợ tài chính',
    shortTitle: 'Vốn vay ưu đãi',
    iconName: 'CreditCard',
    colorTheme: {
      accent: 'emerald',
      bgGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      textAccent: 'text-emerald-400',
      border: 'border-emerald-500/30',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      progressFill: 'bg-emerald-500',
    },
    fullText: 'Trong 9 tháng, các chương trình tín dụng chính sách đã kịp thời tiếp sức, hỗ trợ vốn vay cho gần 1,54 triệu lượt người phát triển sản xuất và ổn định đời sống.',
    keyStats: [
      {
        id: 'beneficiaries',
        label: 'Lượt người được hỗ trợ vốn vay',
        value: 1.54,
        decimals: 2,
        unit: 'triệu lượt người',
        highlightText: 'Qua tín dụng chính sách trong 9 tháng',
        badge: '9 tháng năm 2026',
        type: 'people'
      }
    ]
  },
  {
    id: 'healthcare',
    number: '03',
    title: 'Chăm sóc sức khỏe toàn dân',
    shortTitle: 'Y tế toàn dân',
    iconName: 'HeartPulse',
    colorTheme: {
      accent: 'cyan',
      bgGradient: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
      textAccent: 'text-cyan-400',
      border: 'border-cyan-500/30',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      progressFill: 'bg-cyan-400',
    },
    fullText: 'Năm 2026 có khoảng 97% người dân được khám sức khỏe định kỳ, khám sàng lọc miễn phí; 88,2% người dân được lập sổ sức khỏe điện tử. Tỷ lệ bao phủ bảo hiểm y tế năm 2026 ước đạt 95,5%.',
    keyStats: [
      {
        id: 'free-checkup',
        label: 'Khám sức khỏe định kỳ, sàng lọc miễn phí',
        value: 97.0,
        decimals: 0,
        unit: '%',
        percentageValue: 97,
        highlightText: 'Khoảng 97% người dân',
        type: 'percentage'
      },
      {
        id: 'health-record',
        label: 'Người dân được lập sổ sức khỏe điện tử',
        value: 88.2,
        decimals: 1,
        unit: '%',
        percentageValue: 88.2,
        highlightText: '88,2% người dân',
        type: 'percentage'
      },
      {
        id: 'bhyt-coverage',
        label: 'Tỷ lệ bao phủ Bảo hiểm Y tế',
        value: 95.5,
        decimals: 1,
        unit: '%',
        percentageValue: 95.5,
        highlightText: 'Ước đạt 95,5% năm 2026',
        badge: 'Ước đạt 2026',
        type: 'percentage'
      }
    ]
  },
  {
    id: 'income-welfare',
    number: '04',
    title: 'Nâng cao thu nhập và phúc lợi',
    shortTitle: 'Thu nhập và Phúc lợi',
    iconName: 'TrendingUp',
    colorTheme: {
      accent: 'blue',
      bgGradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
      textAccent: 'text-blue-400',
      border: 'border-blue-500/30',
      badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      progressFill: 'bg-blue-500',
    },
    fullText: '9 tháng năm 2026, thu nhập người lao động bình quân đạt 9,06 triệu đồng/tháng, tăng gần 9,4% so với cùng kỳ. Từ ngày 1-7-2026, lương cơ sở tăng 8%, phụ cấp đối với cán bộ, công chức cấp xã tăng từ 25% lên 55%. Trợ cấp, phụ cấp đối với người có công và đối tượng bảo trợ xã hội tăng 8%, với tổng kinh phí tăng thêm dự kiến trên 4.000 tỷ đồng/năm.',
    policyNote: 'Áp dụng tăng lương cơ sở 8% và phụ cấp cấp xã tăng mạnh lên 55% từ 01/07/2026.',
    keyStats: [
      {
        id: 'avg-income',
        label: 'Thu nhập bình quân người lao động',
        value: 9.06,
        decimals: 2,
        unit: 'triệu đồng/tháng',
        highlightText: '9 tháng năm 2026',
        trend: {
          direction: 'up',
          text: 'Tăng gần 9,4% so với cùng kỳ'
        },
        type: 'currency'
      },
      {
        id: 'base-salary-increase',
        label: 'Tăng lương cơ sở (từ 01/07/2026)',
        value: 8.0,
        prefix: '+',
        decimals: 0,
        unit: '%',
        highlightText: 'Tăng 8% từ 01/07/2026',
        badge: 'Từ 01-07-2026',
        type: 'percentage'
      },
      {
        id: 'commune-allowance',
        label: 'Phụ cấp cán bộ, công chức cấp xã',
        value: 55,
        prefix: '25% → ',
        decimals: 0,
        unit: '%',
        percentageValue: 55,
        highlightText: 'Tăng từ 25% lên 55%',
        type: 'percentage'
      },
      {
        id: 'merit-subsidy-increase',
        label: 'Trợ cấp người có công và bảo trợ xã hội',
        value: 8.0,
        prefix: '+',
        decimals: 0,
        unit: '%',
        highlightText: 'Tăng 8%',
        type: 'percentage'
      },
      {
        id: 'extra-budget',
        label: 'Kinh phí tăng thêm cho trợ cấp',
        value: 4000,
        prefix: '> ',
        decimals: 0,
        unit: 'tỷ đồng/năm',
        highlightText: 'Dự kiến trên 4.000 tỷ đồng/năm',
        type: 'currency'
      }
    ]
  },
  {
    id: 'disaster-protection',
    number: '05',
    title: 'Ứng phó thiên tai, bảo vệ tính mạng và tài sản của nhân dân',
    shortTitle: 'Phòng chống thiên tai',
    iconName: 'ShieldCheck',
    colorTheme: {
      accent: 'rose',
      bgGradient: 'from-rose-500/10 via-rose-500/5 to-transparent',
      textAccent: 'text-rose-400',
      border: 'border-rose-500/30',
      badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
      progressFill: 'bg-rose-500',
    },
    fullText: 'Công tác phòng chống thiên tai được triển khai quyết liệt và hiệu quả, giúp giảm mạnh thiệt hại về người và tài sản. Trong 10 tháng năm 2026, thiệt hại về tài sản giảm khoảng 92% (còn 3.498 tỷ đồng); số người chết và mất tích giảm gần 70% (còn 68 người) so với cùng kỳ.',
    keyStats: [
      {
        id: 'property-loss-reduction',
        label: 'Giảm thiệt hại tài sản (10 tháng 2026)',
        value: 92.0,
        prefix: 'Giảm gần ',
        decimals: 0,
        unit: '%',
        percentageValue: 92,
        highlightText: 'Thiệt hại còn 3.498 tỷ đồng',
        type: 'reduction'
      },
      {
        id: 'human-loss-reduction',
        label: 'Giảm số người chết và mất tích',
        value: 70.0,
        prefix: 'Giảm gần ',
        decimals: 0,
        unit: '%',
        percentageValue: 70,
        highlightText: 'Số người chết và mất tích còn 68 người',
        type: 'reduction'
      }
    ]
  }
];

export const SUMMARY_HIGHLIGHTS = [
  {
    label: 'Căn hộ nhà ở xã hội (đang triển khai)',
    value: '858.500',
    subText: '907 dự án với 793.000 tỷ đ',
    badge: 'Mục tiêu 1 triệu căn'
  },
  {
    label: 'Lượt người tiếp cận vốn chính sách',
    value: '1,54 triệu',
    subText: 'Hỗ trợ sản xuất và ổn định sống',
    badge: '9 tháng 2026'
  },
  {
    label: 'Bao phủ Bảo hiểm Y tế',
    value: '95,5%',
    subText: '97% khám định kỳ miễn phí',
    badge: 'Năm 2026'
  },
  {
    label: 'Thu nhập bình quân người lao động',
    value: '9,06 triệu đ',
    subText: 'Tăng gần 9,4% so với cùng kỳ',
    badge: 'Tháng'
  },
  {
    label: 'Giảm thiệt hại tài sản thiên tai',
    value: 'Giảm 92%',
    subText: 'Thiệt hại giảm còn 3.498 tỷ đ',
    badge: '10 tháng 2026'
  }
];
