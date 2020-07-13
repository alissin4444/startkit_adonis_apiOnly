'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Phrase = use('App/Models/Phrase')

/**
 * Resourceful controller for interacting with phrases
 */
class PhraseController {
  /**
   * Show a list of all phrases.
   * GET phrases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const phrases = await Phrase.all()

    return response.ok(phrases)
  }


  /**
   * Create/save a new phrase.
   * POST phrases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['author', 'phrase'])
    const phrase = await Phrase.create(data)

    return response.ok(phrase)
  }

  /**
   * Display a single phrase.
   * GET phrases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params

    const phrase = await Phrase.find(id)

    return response.ok(phrase)
  }

  /**
   * Update phrase details.
   * PUT or PATCH phrases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.only(['author', 'phrase'])
    const { id } = params

    const phrase = await Phrase.find(id)

    phrase.merge(data)

    await phrase.save()

    return response.ok(phrase)
  }

  /**
   * Delete a phrase with id.
   * DELETE phrases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params

    const phrase = await Phrase.find(id)

    await phrase.delete()

    return response.noContent()
  }
}

module.exports = PhraseController
