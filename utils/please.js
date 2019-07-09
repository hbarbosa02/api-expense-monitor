/**
 *
 */
exports.compose = (...fcns) => {
  if (fcns.length === 0) return o => o;
  if (fcns.length === 1) return fcns[0];

  return resolve =>
    fcns.reduceRight((fnPrevious, fn) => fn(fnPrevious), resolve);
};

/**
 *
 */
exports.authenticated = fn => (obj, args, ctx, info) => {
  if (!ctx.user) return Error("FORBIDDEN");
  return fn(obj, args, ctx, info);
};

/**
 *
 */
exports.allowed = role => fn => (obj, args, ctx, info) => {
  if (role && !ctx.user.permissions.includes(role)) return Error("FORBIDDEN");
  return fn(obj, args, ctx, info);
};
