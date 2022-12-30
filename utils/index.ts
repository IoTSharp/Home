import {AppContext} from "next/app";

export const getIsMobile = (context: AppContext) => {
  const {headers = {}} = context.ctx.req || {};
  return /mobile|android|iphone|ipad|phone/i.test(
    (headers["user-agent"] || "").toLowerCase()
  );
};

export const getIsSupportWebp = (context: AppContext) => {
  const {headers = {}} = context.ctx.req || {};
  return headers.accept?.includes("image/webp");
};
