/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

declare module "meteor/ground:db" {
  interface Ground {
    Collection: GroundCollection;
  };
}

declare class GroundCollection {
  constructor(name: string, options?: any)

  observeSource(source: any)

  find(...args)

  findOne(...args)

  insert(...args)

  upsert(selector: any, ...args)

  update(selector: any, ...args)

  remove(selector: any, ...args)

  clear()

  keep(selector: any)
};
