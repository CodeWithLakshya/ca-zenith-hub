// Responsive utility classes and patterns
export const responsiveClasses = {
  // Layout patterns
  container: "w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8",
  section: "py-4 sm:py-6 lg:py-8 xl:py-12",
  
  // Grid patterns
  gridCols1: "grid grid-cols-1",
  gridCols2: "grid grid-cols-1 sm:grid-cols-2",
  gridCols3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  gridCols4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  gridCols6: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
  
  // Gaps
  gapXs: "gap-2 sm:gap-3",
  gapSm: "gap-3 sm:gap-4",
  gapMd: "gap-4 sm:gap-6",
  gapLg: "gap-6 sm:gap-8",
  
  // Spacing
  spaceXs: "space-y-2 sm:space-y-3",
  spaceSm: "space-y-3 sm:space-y-4",
  spaceMd: "space-y-4 sm:space-y-6",
  spaceLg: "space-y-6 sm:space-y-8",
  
  // Padding
  paddingXs: "p-3 sm:p-4",
  paddingSm: "p-4 sm:p-6",
  paddingMd: "p-6 sm:p-8",
  
  // Typography
  textDisplay: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight",
  textTitle: "text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight",
  textSubtitle: "text-lg sm:text-xl lg:text-2xl font-medium",
  textBody: "text-sm sm:text-base lg:text-lg",
  textCaption: "text-xs sm:text-sm text-muted-foreground",
  
  // Button sizes
  buttonSm: "h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm",
  buttonMd: "h-9 px-4 text-sm sm:h-10 sm:px-6 sm:text-base",
  buttonLg: "h-10 px-6 text-sm sm:h-11 sm:px-8 sm:text-base",
  
  // Icon sizes
  iconXs: "w-3 h-3 sm:w-4 sm:h-4",
  iconSm: "w-4 h-4 sm:w-5 sm:h-5",
  iconMd: "w-5 h-5 sm:w-6 sm:h-6",
  iconLg: "w-6 h-6 sm:w-7 sm:h-7",
  
  // Flex patterns
  flexCol: "flex flex-col",
  flexRow: "flex flex-col sm:flex-row",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4",
  
  // Card patterns
  cardBase: "bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200",
  cardPadding: "p-4 sm:p-6",
  cardHeader: "pb-3 sm:pb-4",
  
  // Mobile specific
  mobileHidden: "hidden sm:block",
  mobileOnly: "block sm:hidden",
  mobileBottomSpace: "pb-20 sm:pb-6", // Account for mobile bottom nav
} as const;

export type ResponsiveClass = keyof typeof responsiveClasses;

// Helper function to get responsive classes
export const getResponsiveClass = (className: ResponsiveClass) => {
  return responsiveClasses[className];
};

// Breakpoint helpers
export const breakpoints = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const;