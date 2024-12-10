declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        isExpanded: boolean;
        isVerticalSwipesEnabled: boolean;
        initDataUnsafe: any;
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        setBottomBarColor: (color: string) => void;
      };
    };
  }
}

export {}