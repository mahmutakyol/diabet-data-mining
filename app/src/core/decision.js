import questions from './questions'

export default {

  tmp_question_map: null,
  question_map: {
    'POLIURI': {
      'YES': {
        'YAS': {
          '71 < YAS': {
            'ANI_KILO_KAYBI': {
              'YES': {
                positive: 4,
                negative: 0
              },
              'NO': {
                positive: 0,
                negative: 6
              }
            }
          },
          '71 > YAS': {
            'POLIDIPSI': {
              'YES': {
                positive: 191,
                negative: 0
              },
              'NO': {
                'OBEZITE': {
                  'YES': {
                    'IYILESME_GECIKMESI': {
                      'YES': {
                        positive: 1,
                        negative: 8
                      },
                      'NO': {
                        positive: 7,
                        negative: 0
                      }
                    }
                  },
                  'NO': {
                    positive: 40,
                    negative: 1
                  }
                }
              }
            }
          }
        }
      },
      'NO': {
        'POLIDIPSI': {
          'YES': {
            'ASABILIK': {
              'YES': {
                positive: 18,
                negative: 0
              },
              'NO': {
                'KASINTI': {
                  'YES': {
                    'CINSIYET': {
                      'MALE': {
                        'SAC_DOKUMLESI': {
                          'YES': {
                            positive: 4,
                            negative: 1
                          },
                          'NO': {
                            positive: 0,
                            negative: 7
                          }
                        }
                      },
                      'FEMALE': {
                        positive: 4,
                        negative: 0
                      }
                    }
                  },
                  'NO': {}
                }
              }
            }
          },
          'NO': {
            'CINSIYET': {
              'MALE': {
                'ASABILIK': {
                  'YES': {
                    'GENITAL_PAMUKCUK': {
                      'YES': {
                        positive: 5,
                        negative: 0
                      },
                      'NO': {
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
                  'NO': {
                    'KISMI_FELC': {
                      'YES': {
                        positive: 2,
                        negative: 14
                      },
                      'NO': {
                        'IYILESME_GECIKMESI': {
                          'YES': {
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
                          'NO': {
                            positive: 0,
                            negative: 91
                          }
                        }
                      }
                    }
                  }
                }
              },
              'FEMALE': {
                'SAC_DOKULMESI': {
                  'YES': {
                    positive: 1,
                    negative: 13
                  },
                  'NO': {
                    'YAS': {
                      '34.5 < YAS': {
                        positive: 26,
                        negative: 1
                      },
                      '34.5 > YAS': {
                        'GORSEL_BULANIKLIK': {
                          'NO': {
                            positive: 0,
                            negative: 5
                          },
                          'YES': {
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
      'YES',
      'NO'
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
