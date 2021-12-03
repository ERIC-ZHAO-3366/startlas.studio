import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/dev/": [
    {
      isGroup: true,
      text: "文档列表",
      children: [
        "/dev/README.md",
      ],
    },
  ],
};
