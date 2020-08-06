import questions from './questions'

export default {

  tmp_question_map: null,
  question_map: {
    'POLIURI': {
      'EVET': {
        'YAS': {
          '71 < YAS': {
            'ANI_KILO_KAYBI': {
              'EVET': {
                positive: 4,
                negative: 0
              },
              'HAYIR': {
                positive: 0,
                negative: 6
              }
            }
          },
          '71 > YAS': {
            'POLIDIPSI': {
              'EVET': {
                positive: 191,
                negative: 0
              },
              'HAYIR': {
                'OBEZITE': {
                  'EVET': {
                    'IYILESME_GECIKMESI': {
                      'EVET': {
                        positive: 1,
                        negative: 8
                      },
                      'HAYIR': {
                        positive: 7,
                        negative: 0
                      }
                    }
                  },
                  'HAYIR': {
                    positive: 40,
                    negative: 1
                  }
                }
              }
            }
          }
        }
      },
      'HAYIR': {
        'POLIDIPSI': {
          'EVET': {
            'ASABILIK': {
              'EVET': {
                positive: 18,
                negative: 0
              },
              'HAYIR': {
                'KASINTI': {
                  'EVET': {
                    'CINSIYET': {
                      'ERKEK': {
                        'SAC_DOKUMLESI': {
                          'EVET': {
                            positive: 4,
                            negative: 1
                          },
                          'HAYIR': {
                            positive: 0,
                            negative: 7
                          }
                        }
                      },
                      'KADIN': {
                        positive: 4,
                        negative: 0
                      }
                    }
                  },
                  'HAYIR': {}
                }
              }
            }
          },
          'HAYIR': {
            'CINSIYET': {
              'ERKEK': {
                'ASABILIK': {
                  'EVET': {
                    'GENITAL_PAMUKCUK': {
                      'EVET': {
                        positive: 5,
                        negative: 0
                      },
                      'HAYIR': {
                        'YAS': {
                          '42.5 < YAS': {
                            positive: 0,
                            negative: 10
                          },
                          '42.5 > YAS': {
                            positive: 2,
                            negative: 1
                          }
                        }
                      }
                    }
                  },
                  'HAYIR': {
                    'KISMI_FELC': {
                      'EVET': {
                        positive: 2,
                        negative: 14
                      },
                      'HAYIR': {
                        'IYILESME_GECIKMESI': {
                          'EVET': {
                            'YAS': {
                              '40 < YAS': {
                                positive: 1,
                                negative: 42
                              },
                              '40 > YAS': {
                                positive: 3,
                                negative: 0
                              }
                            }
                          },
                          'HAYIR': {
                            positive: 0,
                            negative: 91
                          }
                        }
                      }
                    }
                  }
                }
              },
              'KADIN': {
                'SAC_DOKULMESI': {
                  'EVET': {
                    positive: 1,
                    negative: 13
                  },
                  'HAYIR': {
                    'YAS': {
                      '34.5 < YAS': {
                        positive: 26,
                        negative: 1
                      },
                      '34.5 > YAS': {
                        'GORSEL_BULANIKLIK': {
                          'HAYIR': {
                            positive: 0,
                            negative: 5
                          },
                          'EVET': {
                            positive: 5,
                            negative: 0
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },

  current_question: {
    question: 'POLIURI',
    question_title: questions.questions.find(q => q.code === 'POLIURI').title,
    answers: [
      'EVET',
      'HAYIR'
    ]
  },

  setAnswer (incoming) {
    this.incomings[incoming.question](incoming.answer)
  },

  getNextQuestion (incoming) {
    if (!this.tmp_question_map) {
      this.tmp_question_map = this.question_map[incoming.question][incoming.answer]
    } else {
      this.tmp_question_map = this.tmp_question_map[incoming.question][incoming.answer]
    }

    if (Object.keys(this.tmp_question_map)[0] === 'positive' && Object.keys(this.tmp_question_map)[1] === 'negative') {
      let res = this.calculateResponse(this.tmp_question_map)
      return res
    }

    let tmp_question = {
      question: Object.keys(this.tmp_question_map)[0],
      answers: Object.keys(Object.values(this.tmp_question_map)[0]),
      question_title: questions.questions.find(q => q.code === Object.keys(this.tmp_question_map)[0]).title
    }
    return tmp_question
  },

  calculateResponse (counts) {
    let total = counts.positive + counts.negative
    let positive_count = counts.positive
    let negative_count = counts.negative
    let negativePercentage = ((negative_count * 100) / total).toFixed(2)
    let positivePercentage = ((positive_count * 100) / total).toFixed(2)

    return {
      positivePercentage,
      negativePercentage,
      positive_count,
      negative_count
    }
  },

  getQuestion () {
    return this.current_question
  },

  refresh () {
    this.tmp_question_map = null
    return this.current_question
  }
}
