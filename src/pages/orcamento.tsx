import { useState } from "react";

import * as material from "@mui/material";

import { Landpage } from "components/Layout/landpage";
import { Title } from "components/Title";

import { useForm, SubmitHandler } from "react-hook-form";

import { ValidatedEmail } from "utils/validation";
import { maskPhone } from "utils/masked";

import styles from "../styles/pages/budget.module.scss";
import commonStyles from "../styles/commonStyles.module.scss";
import axios from "axios";

interface IFormInput {
  website: string;
  application: string;
  "e-commerce": string;
  visualIdentify: string;
  marketingDigital: string;
  socialMedia: string;

  amount: string;

  name: string;
  "e-mail": string;
  phone: string;
  company: string;
  didMeet: string;
  message: string;
}

export default function Budget() {
  const [didMeet, setDidMeet] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  // SELECT
  const handleChange = (event: material.SelectChangeEvent) => {
    setDidMeet(event.target.value as string);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IFormInput>();

  const onSubmitFormBudget: SubmitHandler<IFormInput> = async (data) => {
    const payload = {
      aplicativo: data.application ? "sim" : "não",
      "e-commerce": data["e-commerce"] ? "sim" : "não",
      "identidade visual": data.visualIdentify ? "sim" : "não",
      "gestão de mídias sociais": data.socialMedia ? "sim" : "não",
      "marketing digital": data.marketingDigital ? "sim" : "não",
      website: data.website ? "sim" : "não",

      "Orçamento inicial": amount,

      nome: data.name,
      "e-mail": data["e-mail"],
      telefone: data.phone,
      "nome da empresa": data.company,
      "como nos conheceu?": didMeet,
      "detalhes do projeto": data.message,
    };

    setLoading(true);

    await axios
      .post(
        "https://formeezy.com/api/v1/forms/62536d366dd5720009f2a8c9/submissions",
        payload
      )
      .then((res) => {
        console.log(res);
        const { redirect } = res.data;
        window.location.href = redirect;
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Landpage title="Orçamento">
      <div className={styles.container_budget}>
        <div className={styles.aside}>
          <h1>Deixe seu projeto em boas mãos!</h1>
          <p>
            Preencha corretamente as informações do formulário para que um de
            nossos especialistas entre em contato
          </p>
        </div>

        <form
          className={styles.form_budget}
          onSubmit={handleSubmit(onSubmitFormBudget)}
        >
          <Title title="Como podemos ajudá-lo?" icon="ri-question-line ri-2x" />
          <material.FormGroup className={styles.form_group_checkbox}>
            <material.FormControlLabel
              {...register("website")}
              control={
                <material.Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                />
              }
              label="Website"
            />
            <material.FormControlLabel
              {...register("application")}
              control={
                <material.Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                />
              }
              label="Aplicativo"
            />

            <material.FormControlLabel
              {...register("e-commerce")}
              control={
                <material.Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                />
              }
              label="E-commerce"
            />

            <material.FormControlLabel
              {...register("visualIdentify")}
              control={
                <material.Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                />
              }
              label="Identidade Visual"
            />

            <material.FormControlLabel
              {...register("marketingDigital")}
              control={
                <material.Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                />
              }
              label="Marketing Digital"
            />

            <material.FormControlLabel
              {...register("socialMedia")}
              control={
                <material.Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                />
              }
              label="Gestão de mídias sociais"
            />
          </material.FormGroup>

          <Title
            title="Qual seu orçamento disponível?"
            icon="ri-money-dollar-circle-line ri-2x"
          />

          <material.FormControl
            className={styles.form_control_radio}
            component="fieldset"
          >
            <material.RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
            >
              <material.FormControlLabel
                value="2k"
                onClick={() => setAmount("2k")}
                control={
                  <material.Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 32,
                      },
                    }}
                  />
                }
                label="Abaixo de 2k"
              />
              <material.FormControlLabel
                value="5k"
                onClick={() => setAmount("5k")}
                control={
                  <material.Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 32,
                      },
                    }}
                  />
                }
                label="5k ~ 10k"
              />
              <material.FormControlLabel
                value="10k"
                onClick={() => setAmount("10k")}
                control={
                  <material.Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 32,
                      },
                    }}
                  />
                }
                label="Acima de 10k"
              />
            </material.RadioGroup>
          </material.FormControl>

          <Title
            title="Informações do projeto?"
            icon="ri-information-line ri-2x"
          />

          <material.Box className={styles.info_project}>
            <material.TextField
              {...register("name", { required: true })}
              id="outlined-required"
              label="Nome completo"
              variant="outlined"
              style={{
                background: "var(--white)",
              }}
            />
            <p>{errors.name && "Por favor, informe seu NOME!"}</p>
            <material.TextField
              {...register("e-mail", {
                required: true,
                pattern: ValidatedEmail,
              })}
              id="outlined-required"
              label="E-mail"
              variant="outlined"
              style={{
                background: "var(--white)",
              }}
            />
            <p>{errors["e-mail"] && "Por favor, informe seu E-MAIL!"}</p>
            <p>
              {errors["e-mail"] && errors["e-mail"].type === "pattern"
                ? "Por favor digite seu E-MAIL corretamente!"
                : ""}
            </p>
            <material.TextField
              {...register("phone", {
                required: true,
                onChange: (e) => setValue("phone", maskPhone(e.target.value)),
              })}
              id="outlined-required"
              type="tel"
              label="Telefone"
              variant="outlined"
              style={{
                background: "var(--white)",
              }}
            />
            <p>
              {errors.phone && "Por favor, informe seu número de TELEFONE!"}
            </p>
            <material.TextField
              {...register("company", { required: true })}
              id="outlined-required"
              label="Empresa"
              variant="outlined"
              style={{
                background: "var(--white)",
              }}
            />
            <p>
              {errors.company && "Por favor, informe o número de sua EMPRESA!"}
            </p>
            <material.FormControl fullWidth>
              <material.InputLabel id="demo-simple-select-label">
                Como nos conheceu?
              </material.InputLabel>
              <material.Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={didMeet}
                label="Como nos conheceu?"
                onChange={handleChange}
                style={{
                  background: "var(--white)",
                }}
              >
                <material.MenuItem value="facebook">Facebook</material.MenuItem>
                <material.MenuItem value="instagram">
                  Instagram
                </material.MenuItem>
                <material.MenuItem value="linkedIn">LinkedIn</material.MenuItem>
              </material.Select>
            </material.FormControl>

            <material.TextField
              id="outlined-required"
              label="Mensagem"
              {...register("message", { required: true })}
              variant="outlined"
              multiline={true}
              minRows={5}
              maxRows={15}
              style={{
                background: "var(--white)",
              }}
            />
            <p>{errors.message && "Por favor, digite sua MENSAGEM!"}</p>
          </material.Box>

          <div className={commonStyles.flex}>
            <button className={commonStyles.btn_default} type="submit">
              {loading ? "Enviando" : "Enviar"}
            </button>
            <button className={commonStyles.btn_secondary} type="reset">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Landpage>
  );
}
